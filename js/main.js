function EnumerateVRDevices(devices) {
  console.log(devices);
}

if (navigator.getVRDevices) {
  navigator.getVRDevices().then(EnumerateVRDevices);
} else if (navigator.mozGetVRDevices) {
  navigator.mozGetVRDevices(EnumerateVRDevices);
}else{
    console.log("Aucun device")
}