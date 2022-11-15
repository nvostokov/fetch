/* let url = '//78.25.110.43:5566/ISAPI/Streaming/channels/402/picture?snapShotImageType=JPEG';

let options = [
    rtsp, 
    RtSp_mdu22
];


let jpg = fetch(url, {
    options,
    headers: {
        'Authorization': 'Basic' + btoa('${rtsp}:${RtSp}')
    }
});



 */
let response = await fetch('http://78.25.110.43:5566/ISAPI/Streaming/channels/402/picture?snapShotImageType=JPEG', {method:'GET', 
headers: {'Authorization': 'Basic ' + btoa('rtsp:RtSp_mdu22')}});


