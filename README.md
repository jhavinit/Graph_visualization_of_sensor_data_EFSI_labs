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
The server (which runs on node.js) has all the files in the ey-102 folder which are needed to run to push to Iota data market place (by  running the publish_dmp.sh calls the index.js every 1 minute) which pushes to the Iota Market Place Where data can be visualised in the dashboard of the Iota marketplace website. 
The visualisation of the data is done as follows: 

The server writes the data into two files.One which just stores the old data and the other which stores the dynamic data
The plotting script which plots the value at a particular frequency takes the old data everytime and plots it then the old data.

## How is it implemented?
1. index.htm reads the data that is present in the txt and json file.
2. The data in txt file is an array of arrays that contains all the old data of values from the sensor.
3. The data in json file is dynamic ie. it only contain one value(an array[]) which is overwritten every time with a new data(an array[])
4. Highcharts is used to show the dynamic updated chart containing the old data and getting live data from the sensors.

## How to run the project on local system?
Step 0: Make sure to have a plugin in web browser called: CORS plugin (or any plugin that enables cross origin reference)
Step 1: Fork the project https://github.com/jhavinit/eFSI_graph_visualization <br/>
Step 2: Go into /Dynamic/examples/dynamic-update folder <br/>
Step 3: Edit the path of .txt and .json to the local files or server path(http://path) and run the code in browser

## Results:
![Capture](https://user-images.githubusercontent.com/42121605/60677921-7a943500-9ea0-11e9-99dd-1c40ae3d9ef5.PNG)
