#!/usr/bin/env node

// Using native fetch in Node.js 18+

async function testAuth() {
  console.log('Testing Strapi Authentication...\n');

  // Test login
  const loginResponse = await fetch('http://localhost:1337/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'admin@test.com',
      password: 'Admin123'
    })
  });

  const loginData = await loginResponse.json();
  console.log('Login Response:', JSON.stringify(loginData, null, 2));

  if (loginData.data && loginData.data.token) {
    console.log('\n✅ Login successful!');

    // Test getting user info
    const userResponse = await fetch('http://localhost:1337/admin/users/me', {
      headers: {
        'Authorization': `Bearer ${loginData.data.token}`
      }
    });

    const userData = await userResponse.json();
    console.log('User Data:', JSON.stringify(userData, null, 2));

    if (userData.data) {
      console.log('\n✅ User authentication working perfectly!');
      console.log('The issue is likely with the frontend React application or browser cache.');
    } else {
      console.log('\n❌ User authentication failed');
    }
  } else {
    console.log('\n❌ Login failed');
  }
}

testAuth().catch(console.error);