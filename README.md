# Shipping Billing Component

This microservice will render and recreate the shipping billing view of eBay. It is connected to it's own database and renders dynamically depending on user inputs. Deployed to AWS using docker to make sure the microservice is available to the team and will work on any platform. 

## Get Started

```bash
npm install
psql postgres
CREATE DATABASE shipping_billing
\c shipping_billing
npm start
npm run build:db
npm run build
```
