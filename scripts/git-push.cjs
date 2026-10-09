const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..');

async function main() {
  console.log('Starting git commit and push to GitHub...');

  // 1. Get statusMatrix
  const status = await git.statusMatrix({
    fs,
    dir,
    filter: (f) => !f.startsWith('node_modules') && !f.startsWith('.next') && !f.startsWith('.netlify') && !f.startsWith('.git')
  });

  console.log(`Analyzing ${status.length} candidate files...`);

  let stagedCount = 0;
  for (const [filepath, head, workdir, stage] of status) {
    if (workdir === 0 && head === 1) {
      await git.remove({ fs, dir, filepath });
      stagedCount++;
    } else if (workdir !== head || stage !== workdir) {
      await git.add({ fs, dir, filepath });
      stagedCount++;
    }
  }

  console.log(`Staged ${stagedCount} files.`);

  // 2. Commit
  const sha = await git.commit({
    fs,
    dir,
    message: 'feat: responsive layout and header improvements with unified 1440px container',
    author: {
      name: 'Awais',
      email: 'awais6132@gmail.com',
    },
  });

  console.log(`Committed SHA: ${sha}`);

  // 3. Push
  console.log('Pushing changes to GitHub remote origin/main...');
  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
  });

  console.log('Push Result:', JSON.stringify(pushResult, null, 2));
  console.log('Successfully pushed to GitHub repository!');
}

main().catch((err) => {
  console.error('Git execution error:', err);
  process.exit(1);
});
