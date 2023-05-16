document.getElementById('search device').addEventListener('click', showAllDevice);

async function showAllDevice() {
    const device_list = await navigator.hid.getDevices();
    console.log(device_list)
}
