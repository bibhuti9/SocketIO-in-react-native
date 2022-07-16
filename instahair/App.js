import React, { useState, useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import io from "socket.io-client";

export default function App() {
  const socketRef = useRef();
  useEffect(() => {
    // The URL from your backend side
    socketRef.current = io("https://f16f-2402-3a80-e56-ff0b-71cd-7d56-d251-e54.ngrok.io");
    socketRef.current.on("message", msg => {
      console.log('from')
    });
  }, [])
  return (
    <View>
      <TouchableOpacity onPress={() => {
        socketRef.current.emit("message")
      }}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  )
}