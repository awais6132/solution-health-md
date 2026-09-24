const http = require('http');

const routes = [
  { path: '/', name: 'Home Page', expected: ['Solutions Health', 'Book Appointment'] },
  { path: '/register', name: 'Sign Up Page', expected: ['Create your Account', 'First name', 'Signup with Google', 'logo.png'] },
  { path: '/signup', name: 'Sign Up Alias', expected: ['Create your Account'] },
  { path: '/login', name: 'Sign In Page', expected: ['Welcome Back', 'Sign in with Google', 'Forgot password'] },
  { path: '/forgot-password', name: 'Forgot Password Page', expected: ['Forgot Password', 'Send Recovery Email'] },
  { path: '/forget-password', name: 'Forgot Password Alias', expected: ['Forgot Password'] },
  { path: '/verify-otp', name: 'OTP Verification Page', expected: ['OTP Code Send To:', 'Verify', 'Resend'] },
  { path: '/verify-otp?email=test.doctor%40solutionhealth.com', name: 'Dynamic OTP Email Test', expected: ['test.doctor@solutionhealth.com'] },
  { path: '/otp', name: 'OTP Verification Alias', expected: ['OTP Code Send To:'] },
  { path: '/verify-success', name: 'Verification Success Page', expected: ['Welcome to Solutions', 'Health MD', 'Log in to your Account'] },
  { path: '/verification-success', name: 'Verification Success Alias', expected: ['Welcome to Solutions'] },
  { path: '/reset-password', name: 'Create New Password Page', expected: ['Create New Password', 'Reset Password', 'Terms &amp; Conditions'] },
  { path: '/create-new-password', name: 'Create New Password Alias', expected: ['Create New Password'] },
  { path: '/api/health', name: 'API Health Endpoint', expected: ['"status":"healthy"', '"service":"Solution Health API"'] },
  { path: '/assets/auth-bg.jpg', name: 'Doctor Artwork Background Asset', isBinary: true },
  { path: '/assets/images/logo.png', name: 'Brand Logo Asset', isBinary: true },
];

function testRoute(route) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3000${route.path}`, (res) => {
      let data = '';
      if (!route.isBinary) {
        res.setEncoding('utf8');
        res.on('data', (chunk) => (data += chunk));
      } else {
        res.on('data', () => {});
      }

      res.on('end', () => {
        const statusOk = res.statusCode >= 200 && res.statusCode < 400;
        let checksPassed = true;
        const missing = [];

        if (route.expected) {
          route.expected.forEach((str) => {
            if (!data.includes(str)) {
              checksPassed = false;
              missing.push(str);
            }
          });
        }

        resolve({
          name: route.name,
          path: route.path,
          statusCode: res.statusCode,
          passed: statusOk && checksPassed,
          missing,
          size: data.length,
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        name: route.name,
        path: route.path,
        statusCode: 0,
        passed: false,
        error: err.message,
      });
    });
  });
}

async function runAllTests() {
  console.log('=== STARTING AUTOMATED LIVE SERVER TESTING ===\n');
  const results = [];

  for (const route of routes) {
    const result = await testRoute(route);
    results.push(result);
    const badge = result.passed ? '✓ PASS' : '✗ FAIL';
    console.log(`${badge} [${result.statusCode}] ${result.name} (${result.path})`);
    if (result.missing && result.missing.length > 0) {
      console.log(`  -> Missing content assertions: ${result.missing.join(', ')}`);
    }
    if (result.error) {
      console.log(`  -> Error: ${result.error}`);
    }
  }

  const passedCount = results.filter((r) => r.passed).length;
  const totalCount = results.length;
  console.log(`\n=== TEST SUMMARY: ${passedCount}/${totalCount} PASSED ===`);
  
  // Return JSON summary
  process.stdout.write(`\nJSON_SUMMARY:${JSON.stringify(results)}:END_JSON`);
}

runAllTests();
