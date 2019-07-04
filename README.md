# Graph_visualization_of_sensor_data

```def
Contributions are most welcome!
```
## Objective : 
To visualize data coming from server using highcharts.js

## Complete architecture where it is implemented: 
[Implemented in IOTA data eFSI Labs](https://github.com/eyantra-eysip/Clash-of-DLTs-Blockchain-and-DAG-2019)
Plant vitals from the plants are sent through the MQTT Protocol to a remote server evey minute. The remote server writes the data onto the Tangle using MAM channels by generating random seeds everytime and storing it in the firebase under the devices ID(IOTA market places's API). Data is visualised using Highcharts.
Every Plant has a Humidity and Temperature data which is sensed by the DHT11 module which is sensed by Esp-32 micro-controller. 
The Esp-32 micro-controller is connected to the broker in our case the IIT-B Wireless video which sends data to the server through MQTT data(check the topic subcribed in the mqtt-example-2.js) 
The server (which runs on node.js) has all the files in the ey-102 folder which are needed to run to push to Iota data market place (by running the publish_dmp.sh calls the index.js every 1 minute) which pushes to the Iota Market Place Where data can be visualised in the dashboard of the Iota marketplace website. 
The visualisation of the data is done as follows: 

The server writes the data into two files.One which just stores the old data and the other which stores the dynamic data
The plotting script which plots the value at a particular frequency takes the old data everytime and plots it then the old data.


