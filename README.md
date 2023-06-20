# Using YOLOv5 Dog Cat Detection

## To perform dog and cat detection using YOLOv5, you can follow these steps:

Install YOLOv5: Begin by installing the YOLOv5 library on your system. You can do this by following the installation instructions provided by the YOLOv5 repository.

Load the pre-trained model: Once you have YOLOv5 installed, you need to load a pre-trained model. YOLOv5 provides different model sizes, such as 'yolov5s', 'yolov5m', 'yolov5l', and 'yolov5x'. These models vary in size and accuracy. Choose the appropriate model size for your requirements.

Perform object detection: Use the loaded model to perform object detection on an image. Provide the path to the image you want to analyze. The YOLOv5 library provides a function called detect_image to accomplish this. It takes the loaded model and the path to the image as input and returns the detection results.

Filter the results: Once you have the detection results, you can filter them to include only the 'dog' and 'cat' classes. The YOLOv5 library provides a filter_classes function that allows you to specify the classes you want to keep. Pass the detection results and a list of desired classes ('dog' and 'cat') to this function to obtain the filtered results.

Process and display the results: Iterate through the filtered results and extract the labels and coordinates of the detected objects. You can then process or display this information as needed. In the example above, the code simply prints the labels and coordinates of the detected objects.

Remember to replace 'yolov5s' with the appropriate model name and 'image.jpg' with the path to your desired image file.

By following these steps, you can perform dog and cat detection using YOLOv5 and obtain the labels and coordinates of the detected objects.

## Environment and Dependencies
- Python 3.10.6

Install requirements : 
```bash
pip install -r requirements.txt
```

## Data
- Data used for this project can be found [here.](https://www.kaggle.com/datasets/andrewmvd/dog-and-cat-detection)
- Dataset creation: Refer to [YOLOv5 Train Custom Data](https://github.com/ultralytics/yolov5/wiki/Train-Custom-Data) for more information. In short, labels and bouding boxes were converted in to .txt format as follow: 
    `class x_center y_center width height`
- Data config for training: Standard YOLOv5 YAML format. Refer to [`dataset.yaml`](dataset.yaml) for details.
```yaml
path: ../data/  # dataset root dir
train: train/images  # train images (relative to 'path') 80% images
val: valid/images  # val images (relative to 'path') 20% images
test:  # test images (optional)

# Classes (2 classes)
names:
  0: cat
  1: dog
``` 
## Training
The model was trained with 10 epochs and standard COCO128 configuration (batch-size, image size and pretrained `--weights yolov5s.pt`)
```bash
python train.py --img 640 --batch 16 --epochs 10 --data ../dataset.yaml --weights yolov5s.pt --device 0
```
## Inference with `detect.py`
`detect.py` runs inference on a variety of sources.
```bash
python detect.py --weights [path-to-model] --source [path-to-file] 
```

## Reference 
- [YOLOv5](https://github.com/ultralytics/yolov5)
