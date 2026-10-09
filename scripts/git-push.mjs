import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node/index.cjs';
import fs from 'fs';
import path from 'path';

const dir = 'D:\\Solution Health';

async function main() {
  console.log('Starting git commit and push...');

  // 1. Get statusMatrix
  const status = await git.statusMatrix({
    fs,
    dir,
    filter: (f) => !f.startsWith('node_modules') && !f.startsWith('.next') && !f.startsWith('.netlify') && !f.startsWith('.git')
  });

  console.log(`Found ${status.length} candidate files.`);

  let stagedCount = 0;
  for (const [filepath, head, workdir, stage] of status) {
    // If modified, added, or deleted
    if (workdir === 0 && head === 1) {
      await git.remove({ fs, dir, filepath });
      stagedCount++;
    } else if (workdir !== head || stage !== workdir) {
      await git.add({ fs, dir, filepath });
      stagedCount++;
    }
  }

  console.log(`Staged ${stagedCount} changes.`);

  // 2. Commit
  const sha = await git.commit({
    fs,
    dir,
    message: 'feat: responsive header and hero section with unified container layout',
    author: {
      name: 'Awais',
      email: 'awais6132@gmail.com',
    },
  });

  console.log(`Committed sha: ${sha}`);

  // 3. Push
  console.log('Pushing to GitHub origin/main...');
  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
  });

  console.log('Push completed successfully!', pushResult);
}

main().catch((err) => {
  console.error('Git error:', err);
  process.exit(1);
});
