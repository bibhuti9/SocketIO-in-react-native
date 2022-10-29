"# SocketIO-in-react-native" 

// Turn on the connection and then set the emiter name as on(<emiter Name>)
Here the request package used for call the API like Fetch
the socket.send is used for send the data to the client
and the msg which is revived from the client side.


io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    request.post(
      {
        url: `${process.env.BACKEND_URI}/restuarent/fetchAllCategory`,
        formData: "demo",
      },
      function optionalCallback(err, body) {
        if (err) {
          return console.error("upload failed:", err);
        }
        socket.send(JSON.parse(body.body));
      }
    );
  });
});


/* Client */

socketRef.current = io(BACKEND_URI);
    socketRef.current.on('message', msg => {
      setItem(msg.Data);
    });
    
       socketRef.current.emit('message', userUID);

    
