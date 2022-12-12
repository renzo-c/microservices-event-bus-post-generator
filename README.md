# Post Generator 
Just a simple app to get a taste of microservices architecture

## Backend Services
- Posts: Create new posts
- Comments: Create comments by post
- Event-Bus: Communicate events from one service (Publisher) to another (Listener)
- Query: Provides the full list of posts and associated comments
- Moderation: Check content of comments and decides to publish it or delete it

## Frontend
- React
- Material-UI

## Infraestructure as Code
- Docker: Container creation
- Kubernetes: Container orchestration
- Skaffold: Automate worflow of creating/deleting/updating all the different objects associated with Kubernetes development environment (pods, deployments, services) 
- Ingress-Nginx: Create a Load Balancer service and an Ingress Controller inside a cluster 

Slight variation applied to original project, which was taken from [Udemy course](https://www.udemy.com/course/microservices-with-node-js-and-react)