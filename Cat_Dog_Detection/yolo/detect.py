"""
Run YOLOv5 detection inference on images, videos, directories, globs, YouTube, webcam, streams, etc.

Usage - sources:
    $ python detect.py --weights yolov5s.pt --source 0                               # webcam
                                                     img.jpg                         # image
                                                     vid.mp4                         # video
                                                     screen                          # screenshot
                                                     path/                           # directory
                                                     list.txt                        # list of images
                                                     list.streams                    # list of streams
                                                     'path/*.jpg'                    # glob
                                                     'https://youtu.be/Zgi9g1ksQHc'  # YouTube
                                                     'rtsp://example.com/media.mp4'  # RTSP, RTMP, HTTP stream

Usage - formats:
    $ python detect.py --weights yolov5s.pt                 # PyTorch
                                 yolov5s.torchscript        # TorchScript
                                 yolov5s.onnx               # ONNX Runtime or OpenCV DNN with --dnn
                                 yolov5s_openvino_model     # OpenVINO
                                 yolov5s.engine             # TensorRT
                                 yolov5s.mlmodel            # CoreML (macOS-only)
                                 yolov5s_saved_model        # TensorFlow SavedModel
                                 yolov5s.pb                 # TensorFlow GraphDef
                                 yolov5s.tflite             # TensorFlow Lite
                                 yolov5s_edgetpu.tflite     # TensorFlow Edge TPU
                                 yolov5s_paddle_model       # PaddlePaddle
"""
import cv2
from ultralytics import YOLO
from picamera2 import Picamera2
import time

# Initialize the camera
camera = Picamera2()

# Preview configuration
config = camera.create_preview_configuration({"format": "YUV420", "size": (640, 480)})
camera.configure(config)

# Load the YOLOv8 model
model = YOLO('best.pt')

# Variable to count the frames
frame_counter = 0

# Start the camera
camera.start()

# Wait a certain number of seconds to allow the camera time to warmup
time.sleep(1)

# Loop through the video frames
while True:
    
    # Grab the array representing the image
    image = camera.capture_array()
    
    # Convert image to RGB format
    rgb = cv2.cvtColor(image, cv2.COLOR_YUV420p2RGB)
    
    # Run YOLOv8 inference on the frame
    results = model.predict(rgb, conf=0.9)
    
    # Obtain information about image annotations
    boxes = results[0].boxes
    
    # Visualize the results on the frame
    annotated_frame = results[0].plot()
    
    # Display annotated frame
    cv2.imshow("YOLOV8", annotated_frame)
    
    # If the image has annotations, save
    if len(boxes.xyxy) > 0:
        cv2.imwrite('/home/pi/yolov8/' + f'detected_frame{frame_counter}.jpg', annotated_frame)
        frame_counter += 1
     
    # If the `q` key was pressed, break from the loop
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break
            
cv2.destroyAllWindows()
    
