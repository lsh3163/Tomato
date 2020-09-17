### Docker Image Build
```
# docker build -t <image_name> .
```

### Check Docker Images
```
# docker images
```

### Run Docker Container
```
# docker run -d --nmae <new_container_name> -p 5050:5050 <image_name>
```

### Check Running Containers
```
# docker ps
```

### Check All Containers
```
# docker ps -a
```

### Stop/Start Container
```
# docker start <container_name>
# docker stop <container_name>
```

### Delete Container
```
# docker rm <container_name or container_id>
```

### Delete Image
```
# docker rmi <image_name or image_id>
```