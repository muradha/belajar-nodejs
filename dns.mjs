import dns from 'dns/promises';

const ip = await dns.lookup("www.idolegacy.com");
console.info(ip);