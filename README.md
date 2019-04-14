# Testing Express.js

### TODO
- Read Eloquent JavaScript
- Watch this https://www.youtube.com/watch?v=IyDVvGmzTlo

### Server details
Nginx running on DigitalOcean Droplet  
IP: 188.166.150.158  

Using PM2 to run the express.js server.  
`pm2 start express_test.js`  
`pm2 status`  


### Reverse proxy  
GET to 188.166.150.158 is sent to app running on port 8080  
POST is only working straight to port 188.166.150.158:8080/input  

Only accepting JSON input atm.  

Followed:
- [How To Set Up A Node.js Application](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)
- [How to Accept And Parse Post Requests In Node.js](https://www.kompulsa.com/how-to-accept-and-parse-post-requests-in-node-js/)
