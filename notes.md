docker network create web
docker-compose up -d

sudo systemctl stop nginx
sudo systemctl stop apache2

sudo lsof -i :80
sudo lsof -i :8080


helm create frontend-chart

helm install frontend-release ./frontend-chart

helm install backend-release ./backend-chart

##Verify Deployment
```bash
#deploying backend-chart
kubectl get pods
kubectl get services
eval $(minikube docker-env)
helm install backend-release ./backend-chart
kubectl get pods
kubectl get service
minikube ip #to get the ip address of minikube service 192.168.49.2
minikube service backend-release-backend-chart --url # http://192.168.49.2:32040
#Always comment the liveness and readiness checks in the values.yaml file of the chart
####
kubectl get ingresses
helm uninstall frontend-release
kubectl get deployments
###steps to deploy frontend-release
helm create frontend-chart
helm install frontend-release frontend-chart
kubectl get pods
kubectl get services
minikube ip
minikube service frontend-release-frontend-chart --url ##http://192.168.49.2:31182
##Debuging images
docker build -t user-frontend:1.0 .
minikube image load user-frontend:1.0
minikube ssh -- docker system prune -af

##Rebuild or upgrage deployment
helm upgrade --install frontend-release frontend-chart
helm upgrade --install backend-release backend-chart
const API_BASE_URL = "http://192.168.49.2:8082"; // Replace with Minikube service URL if needed
if we are using minikube
```