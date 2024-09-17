## Deployment notes with kubernetes without minikube
```markdown
minikube start
eval $(minikube -p minikube docker-env)
docker ps
minikube image load user-frontend:1.1
minikube image load user-backend:1.1
###applying changes
kubectl apply -f frontend-deployment.yaml
kubectl apply -f backend-deployment.yaml

kubectl delete deployment user-backend-deployment
kubectl delete deployment user-frontend-deployment

kubectl apply -f <your-deployment-file>.yaml
###expose the frontend
minikube service user-frontend-service
###This will automatically open the React frontend in your browser using a NodePort.

###
Option 2: Use Ingress Controller (Advanced)
If you want to expose both frontend and backend using an Ingress controller for better U
RL management, you need to enable Minikube’s ingress addon:

minikube addons enable ingress

```