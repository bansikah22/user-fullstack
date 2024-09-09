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
kubectl get pods
kubectl get services
kubectl get ingresses
helm uninstall frontend-release
kubectl get deployments

```