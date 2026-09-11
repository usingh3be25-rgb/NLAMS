import os
import sys
import socket
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class NLAMSRequestHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        '': 'application/octet-stream',
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.jsx': 'text/plain; charset=utf-8',
        '.mjs': 'application/javascript; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
    }

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def find_free_port(start_port=5173):
    port = start_port
    while port < start_port + 100:
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('127.0.0.1', port))
                return port
        except OSError:
            port += 1
    return start_port

def main():
    directory = os.path.dirname(os.path.abspath(__file__))
    os.chdir(directory)

    port = find_free_port(5173)
    server_address = ('127.0.0.1', port)

    print("=" * 70)
    print("NATIONAL LAND ACQUISITION & MANAGEMENT SYSTEM (NLAMS)")
    print("Government of India - Unified Digital Interoperability Prototype")
    print("=" * 70)
    print(f"Local Server Root: {directory}")
    print(f"Serving at:       http://localhost:{port}/")
    print(f"Primary Project:  PARK-001 (Green City Government Park, Delhi)")
    print(f"Disputed Parcel:  P-103 (Section 15 Acquisition Dispute)")
    print("=" * 70)
    print("Press Ctrl+C to terminate the server.\n")

    httpd = ThreadingHTTPServer(server_address, NLAMSRequestHandler)
    
    # Auto-open browser if flag passed
    if '--open' in sys.argv:
        try:
            webbrowser.open(f"http://localhost:{port}/")
        except Exception as e:
            print(f"Could not open browser automatically: {e}")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down NLAMS server. Goodbye!")
        httpd.server_close()

if __name__ == '__main__':
    main()
