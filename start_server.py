#!/usr/bin/env python3
"""
Simple HTTP server to serve the evolution-electric-vehicles website
"""
import http.server
import socketserver
import os
from pathlib import Path

def start_server():
    # Change to the workspace directory
    os.chdir('/workspace')
    
    # Define the port
    port = 8000
    
    # Create a simple request handler that serves from the current directory
    handler = http.server.SimpleHTTPRequestHandler
    
    # Start the server
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"Server started at http://localhost:{port}")
        print(f"Project root: {os.getcwd()}")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    start_server()