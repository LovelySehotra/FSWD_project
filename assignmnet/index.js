const os = require('os');

// Print the name of the os module
// console.log(os.constructor.name);
// Print the Node.js version
// console.log(process.version);


// const architectureInfo ='Node.js is built on Chrome\s v8 js  engine'
// fs.writeFile('nodejs.architcture.text',architectureInfo,(err)=>{
//     if(err){
//         console.error('Error writing to file',err);
//     }
//     else{
//         console.log('Information about node architerture has been added ')
//     }
// });



// const contentToAppend = '\nNode.js is widely used for server-side development due to its scalability and efficiency. It has a rich ecosystem of modules and libraries that facilitate web development, networking, and file system operations.';


// fs.appendFile('nodejs.architcture.text', contentToAppend, (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//   } else {
//     console.log('Content has been appended to nodejs_architecture.txt');
//   }
// });
// fs.unlink('nodejs.architcture.text', (err) => {
//     if (err) {
//       console.error('Error deleting file:', err);
//     } else {
//       console.log('nodejs_architecture.txt has been successfully deleted');
//     }
//   });
const http = require('http');

// // Create the HTTP server
// const server = http.createServer((req, res) => {
//   // Set the content type
//   res.setHeader('Content-Type', 'text/plain');

//   // Send the response
//   res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
// });

// // Set the port for the server to listen on
// const port = 3000;

// // Start the server
// server.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
const EventEmitter = require('events');

// Create a custom event emitter
const myEmitter = new EventEmitter();

// Subscribe to the "subscribe" event
myEmitter.on('subscribe', () => {
  console.log('User has subscribed');
});

// Trigger the "subscribe" event
myEmitter.emit('subscribe');

