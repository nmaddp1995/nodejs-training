/*
 Format
  sender   console: DATA send from <id> to 1 Hello <sequence> TSCH
  receiver console: DATA recv: Hello <sequence> from the client <id>
 
 ```c code
 sprintf(buf, "Hello %d from the client %d\n", seq_id, ipaddr.u8[15]);
 ```

 Default: file save in folder [Contiki_dir]/tools/cooja/build (ant run) or [Contiki_dir]/tools/cooja/dist (java -jar cooja.jar)

Auth: Tuyenng and Tuanda
*/

//if using for java 8
try { load("nashorn:mozilla_compat.js"); } catch (e) { }

file = "test.csv";
minute = 3;
second = 52;
timing = 1000000 * (minute * 60 + second);
importPackage(java.io);
logScript = new Object();
logScript = new FileWriter(file);
log.log("Create file " + file + " and pause at " + minute + ":" + second + "\n\n");

listData = []

function Context(data, timeSend, timeReceive, check) {
    this.data = data
    this.timeSend = timeSend
    this.timeReceive = timeReceive
    this.check = check
}

minutep = 1;
secondp = 20;
timingp = 1000000 * (minutep * 60 + secondp);
YIELD_THEN_WAIT_UNTIL(time > timingp)

while (1) {
    YIELD();
    msgArr = msg.split(' ');
    if (msgArr[0].equals("DATA")) {


        if (msgArr[1].equals("sending")) {
            var context1 = new Context(msg.split(' : ')[1], sim.getSimulationTimeMillis(), "", false);
            listData.push(context1);
            //log.log(context1.data+"\n");
        }
        if (msgArr[1].equals("receiving")) {

            //log.log(msg.split(' : ')[1]+"\n");
            for (var i = 0; i < listData.length; i++) {
                if (listData[i].data == msg.split(' : ')[1]) {
                    //                     log.log("Go here\n");
                    listData[i].timeReceive = sim.getSimulationTimeMillis();
                    listData[i].check = true;
                    //                     log.log(listData[i].data + " "+listData[i].timeSend + " "+listData[i].timeReceive);
                    break;

                }
            }
        }

    }


    if (time > timing) {
        log.log("end");
        log.log(listData.length);
        for (var i = 0; i < listData.length; i++) {
            //             log.log("print data");
            if (listData.check == true) {
                line = listData[i].data + " " + listData[i].timeSend + " " + listData[i].timeReceive;
                logScript.write(line);
                // 			    log.log(line);
            }

        }
        logScript.close();
        sim.stopSimulation();
    }
}
