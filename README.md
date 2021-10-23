
1. Run the Docker container  
```bash
docker-compose up --build
```

2. Open debug window on VSCode  
![image](/screenshots/vscode_debug_window.png)

3. Attach debugger by clicking run button

4. Open /src/index.ts and put a breakpoint  
![image](/screenshots/breakpoint.png)

5. Confirm the process stops at breakpoint  
![image](/screenshots/stops_at_breakpoint.png) 



## Parcel

```yarn start```
```npx nodemon dist/index.js```
