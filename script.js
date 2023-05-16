document.getElementById('search HID device').addEventListener('click', showAllHIDDevice);
document.getElementById('search USB device').addEventListener('click', showAllUSBDevice);

async function showAllHIDDevice() {
    const device_list = await navigator.hid.getDevices();
    console.log(device_list)
}

async function showAllUSBDevice() {
    const device_list = await navigator.usbtDevices();
    console.log(device_list)
}
