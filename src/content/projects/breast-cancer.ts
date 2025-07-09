export const breastProject = {
  slug: "mammography-density-cancer-detection",
  title: "Breast Cancer Detection & Density Assessment",
  description: "Classification of breast clinical images for American College of Radiology (ACR) density assessment and malignancy detection using fine-tuned CNNs (ResNet50, VGG16) with a focus on data quality and transfer learning.",
  longDescription: "Developed and implemented deep learning models to classify breast images by ACR density and diagnose malignancy. The project involved extensive data cleaning, image filtering, and fine-tuning pre-trained ResNet50 and VGG16 models. Faced challenges with noisy datasets and explored the impact of data augmentation and transfer learning strategies.",
  tech: [
    "Python",
    "PyTorch",
    "NumPy",
    "torchvision",
    "matplotlib",
    "PIL",
    "pandas"
  ],
  categories: [
    "Medical Imaging",
    "Deep Learning",
    "Image Classification"
  ],
  externalLinks: {
    "View Code": "https://github.com/frapez1/Advanced-Machine-Learning/tree/master/Final-Project"
  },
  image: "https://images.unsplash.com/photo-1598884143267-586d90a32141?w=1200&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0",
  results: [
    "Achieved 75% test accuracy for ACR density assessment using ResNet50 with data augmentation.",
    "ResNet50 model reached 90% validation accuracy for Digital Breast Tomosynthesis (DBT) cancer detection.",
    "Identified significant challenges with Digital Mammography cancer detection due to dataset noise and quality issues, hindering effective learning.",
    "Demonstrated the critical role of data cleaning and pre-processing in medical image analysis."
  ],
  challenges: [
    "Handling and mitigating noise and text overlays in the DDSM Stanford dataset for effective model training.",
    "Achieving robust learning and good performance on challenging Digital Mammography images due to inherent noise and subtle mass features.",
    "Overcoming limitations in computational power for training complex deep learning models.",
    "Differentiating between Normal and Benign cases in DBT cancer detection."
  ],
  markdownContent: `
This project focused on applying deep learning techniques to medical imaging for breast cancer detection and density assessment. It was a collaborative effort to develop robust classification models using Convolutional Neural Networks (CNNs).

-----

## My Contributions to the Project

As a core member of this three-person project, my contributions spanned in several key areas:

* **Data Cleaning and Image Filtering**: I undertook the entire process of understanding and solving the challenges related to data quality, which was particularly critical for the DDSM Stanford dataset. This involved the design and implementation of an automatic pipeline to perform **data cleaning and image filtering**, addressing inherent issues like overlaid text, low contrast, and general noise present in the images. My work focused on meticulously processing these images to remove irrelevant artifacts and enhance the quality of the visual information relevant for diagnosis. This pre-processing was crucial as these imperfections significantly hindered the model's ability to learn effective features. By solving these data-related problems, I aimed to provide a cleaner, more usable dataset for training.
* **Network Design for Density Assessment**: I actively contributed to the **design of the network architecture specifically for the ACR density assessment** task, ensuring it was optimized for this classification challenge.
* **Final Report and Presentation**: I played a crucial role in **writing the final project report and preparing the presentation**, summarizing our findings, methodologies, and conclusions.

-----

## 1. Project Overview and Problem Statement

The project aimed to classify breast clinical images using deep learning models. We addressed two primary objectives:
1.  **ACR Density Index Classification**: Categorizing breast parenchymal density into four types as defined by the American College of Radiology: (A) fatty, (B) scattered fibroglandular tissue, (C) heterogeneously dense and (D) extremely dense. In this project we focused only on classes B, C and D.
2.  **Malignancy Diagnosis**: Classifying breast images based on whether they indicate a Malignant, Benign, or Normal diagnosis.

The core problem was to leverage deep learning techniques to support radiologists in making more accurate and efficient diagnoses, while navigating the complexities of real-world medical image data.

Our approach centered on fine-tuning pre-trained Convolutional Neural Networks, specifically **ResNet50** and **VGG16**, which were initially trained on the ImageNet dataset. We utilized two main datasets: a **private dataset** from Policlinico Umberto I (214 cases) and the public DDSM Stanford Dataset (2620 images).

Every image consisted of a slice extracted via Digital Breast Tomosynthesis (DBT). An example of these DBT are shown below.


![Breast Cancer types](/images/projects/breast-cancer/breat_cancer_types.png "md:w-2/3 lg:w-2/3 mx-auto | Example of DBT for a Malignant, a Benign and a Normal case")

-----

## 1. Data Cleaning and Image Filtering: A Critical Step

One of the most significant challenges, particularly with the DDSM Stanford dataset, was the inherent **noise and overlapping text** on top of the raw images. My primary contribution involved addressing these data quality concerns through rigorous **data cleaning and image filtering**.

### Why Data Cleaning Was Essential

Medical images, especially those from historical or diverse sources like DDSM, often come with imperfections that are detrimental to deep learning models. These include:

* **Overlaid Text and Annotations**: Many mammograms contained textual overlays (e.g., patient IDs, scan parameters, radiologist notes). While essential for clinical context, these texts are irrelevant visual noise for a machine learning model trying to identify medical features. The network might inadvertently learn to classify the images based on these texts instead of the actual breast.
* **Low Contrast and Uneven Illumination**: The mammograms often exhibited low contrast, making subtle features like microcalcifications or masses difficult to discern. Uneven illumination further complicated this, leading to inconsistent image quality across the dataset.
* **General Noise and Artifacts**: Beyond text, images contained various artifacts, such as dust, scratches, or acquisition-related noise, which could be misinterpreted by the model as significant features.

These issues meant that without proper cleaning, the models were attempting to learn from "dirty" data, leading to poor generalization and unreliable predictions. The saying "garbage in, garbage out" perfectly applied here.

### How Data Cleaning and Filtering Were Performed

My approach to data cleaning involved a combination of techniques aimed at isolating and enhancing the diagnostically relevant information:

* **Text Removal Techniques**: Identifying and mitigating the impact of overlaid text was a key focus. This involved exploring and implementing image processing techniques to detect and "mask out" these text regions. While a complete, perfect removal was challenging due to the variability of text placement and style, the goal was to minimize their interference. This included strategies such as:
  * **Region-based Masking**: Manually or semi-automatically identifying common areas where text appeared and applying masks to obscure these regions.
  * **Thresholding and Contouring**: Using image processing techniques like thresholding to highlight text based on pixel intensity differences, followed by contouring to define and remove these areas.
  * **Inpainting/Noise Filling**: After identifying text regions, attempting to fill these areas with surrounding pixel information to create a more uniform background, effectively "erasing" the text.
* **Contrast Enhancement**: To address low contrast, I applied various image enhancement algorithms. Techniques like **histogram equalization** or adaptive histogram equalization (AHE/CLAHE) were explored to redistribute pixel intensities and improve the visibility of features across the entire image or within localized regions. The 'ColorJitter' augmentation, as mentioned in the methodology, also played a role in dynamically enhancing contrast during training.
* **Noise Reduction**: Standard image filtering techniques, such as **Gaussian blurring** or **median filtering**, were applied to reduce random noise while attempting to preserve important edges and features. The challenge was to balance noise reduction with the preservation of subtle medical details.
* **Standardization and Normalization**: Beyond visual clean-up, I ensured that image intensities were normalized across the dataset. This standardization helps in consistent model training by preventing certain images from dominating the learning process due to higher overall pixel values.

By meticulously applying these filtering and cleaning steps, I aimed to transform the raw, noisy DDSM images into a more standardized and feature-rich format, thus providing a much better foundation for the deep learning models to extract meaningful patterns for both density assessment and cancer detection. One of the cleaned DBT is shown below.

![Cleaned DBT](/images/projects/breast-cancer/breast_cancer_denoised.png "md:w-2/3 lg:w-2/3 mx-auto | The use of a two-pass binary connected-component labeling algorithm, which identifies all distinct connected component, allowed to detect and remove the text and produce the clean image on the RIGHT.")

-----

## 4. Results and Key Findings

### ACR Density Assessment

* **ResNet50**: Achieved a **90% validation accuracy** and **75% test accuracy** after applying data augmentation (Color Jitter).
* **VGG16**: Showed more difficulty in learning, resulting in a **66% test accuracy**. ResNet50 consistently demonstrated superior performance.

### Cancer Detection

* **ResNet50**: Reached an impressive **90% validation accuracy**. While effective in identifying malignant masses, distinguishing between Normal and Benign cases remained a challenge.
* **VGG16**: Achieved a **65% accuracy**.

-----

## 5. Lessons Learned and Future Directions

This project underscored several critical insights:

* **Data Quality is Paramount**: The quality of medical imaging data is crucial for deep learning model performance. Noise and artifacts, even subtle ones, can significantly impede the learning process. My extensive work in data filtering directly addressed this, demonstrating its fundamental importance.
* **Computational Limitations**: The project highlighted that powerful computational resources (e.g., GPUs) are indispensable for effectively training complex image classification networks.

Future work will focus on improving the precision of our classifications, including the implementation of more advanced mass recognition techniques within Mammography and Tomosynthesis. Acquiring more high-quality data, particularly for digital mammography, would be invaluable for further advancements.

`
}