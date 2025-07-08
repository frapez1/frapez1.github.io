export const sqGanProject = {
  slug: "sq-gan",
  title: "SQ-GAN: Semantic Image Communications Using Masked Vector Quantization",
  description: "SQ-GAN is a novel deep learning approach that optimizes image compression for semantic communications by leveraging masked vector quantization and semantic segmentation.",
  longDescription: "This project introduces Semantically Masked Vector Quantized Generative Adversarial Network (SQ-GAN), a method integrating semantically driven image coding and vector quantization. It optimizes image compression for task-oriented communications by selectively encoding semantically relevant features, outperforming existing state-of-the-art methods.",
  tech: ["PyTorch", "Python", "Deep Learning", "GAN", "Vector Quantization (VQ-GAN)"],
  categories: ["Computer Vision", "Machine Learning", "Semantic Communication"],
  externalLinks: {
    "Paper": "https://arxiv.org/abs/2502.09520",
    "View Code": "https://github.com/frapez1/SQ-GAN",
  },
  image: "https://images.unsplash.com/photo-1555768900-f16e8658cca5?w=1200&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.85", 
  results: [
    "Outperforms state-of-the-art image compression schemes (JPEG2000, BPG, and deep-learning based methods).",
    "Achieves superior perceptual quality and semantic segmentation accuracy on reconstructed images.",
    "Enables extremely low compression rates while preserving semantically relevant information.",
    "Reduces transmission rates drastically by sending only compressed feature representations."
  ],
  challenges: [
    "Integrating semantic conditioning and compression directly into a GAN architecture.",
    "Developing an adaptive masking module (SAMM) that dynamically adjusts compression while preserving semantic importance.",
    "Designing a training methodology that effectively optimizes subnetworks before joint training.",
    "Ensuring compatibility with legacy communication systems by focusing solely on source coding."
  ],
  markdownContent: `
## Introduction

SQ-GAN, or Semantic Masked Vector Quantized Generative Adversarial Network, is a pioneering method designed to enhance image compression for task-oriented communication systems. Unlike traditional compression techniques that treat all image data equally, SQ-GAN intelligently identifies and prioritizes semantically important regions, ensuring critical information is preserved even at very high compression ratios. This approach is particularly valuable for applications where specific visual elements hold greater significance, such as autonomous driving or surveillance.

![general_scheme](/src/assets/projects/sqgan/general_scheme.png "md:w-2/3 lg:w-2/3 mx-auto | A schematic representation of the overall flow from image capture to reconstruction.")

## Architecture Overview

The SQ-GAN framework is built upon a sophisticated architecture that integrates semantic segmentation with a masked vector quantization process. It operates through distinct transmitter and receiver components. The transmitter extracts both the raw image and its semantic segmentation map, then jointly encodes them using a semantic-guided vector quantization strategy. The core of this process involves novel modules that adaptively select and quantize only the most semantically relevant features. At the receiver, the quantized information is decoded and de-masked to reconstruct the image and its semantic map, ensuring high fidelity for the areas that matter most.

![schema](/src/assets/projects/sqgan/schema_vero.png "md:w-2/3 lg:w-2/3 mx-auto | Detailed structure of the proposed SQ-GAN encoder and decoder, showing the interplay between image and semantic segmentation map pipelines.")


## Key Innovations

SQ-GAN introduces several pivotal innovations to achieve its superior performance:

* **Semantic-Conditioned Adaptive Mask Module (SAMM):** This module intelligently selects and encodes the most semantically relevant features based on the image's semantic segmentation map. It dynamically adjusts the compression rate, ensuring that crucial information is retained while reducing redundancy.
* **Novel GAN-based Integration:** The model seamlessly integrates semantic conditioning and image compression directly into its Generative Adversarial Network architecture.
* **Targeted Data Augmentation:** During training, a specifically designed data augmentation technique is employed to enhance the focus on semantically relevant classes.
* **Semantic-Aware Discriminator:** The inclusion of this discriminator during the training phase guides the model to prioritize the importance of semantically relevant regions over less significant ones.

![data_aug](/src/assets/projects/sqgan/data_augmentation.png "md:w-2/3 lg:w-2/3 mx-auto | Effect of the targeted Data Augmentation aimed to increase the presence of semantically relevant classes such as traffic signs and traffic lights. (Left) origninal and (Right) augmented with random rotation, cropping and the proposed semantic relevant classes enhancement.")

## Training Methodology

Training SQ-GAN is a methodical three-step process designed to progressively optimize its components before a final joint training phase. This, together with **secifically designed Loss functions and Discriminators**, ensures that individual subnetworks are robustly trained before their integration.

1.  **Semantic Subnetwork (G_s) Training:** The initial phase focuses on training the semantic subnetwork, which is responsible for processing and encoding the semantic segmentation maps.
2.  **Image Subnetwork (G_x) Training:** Following the semantic subnetwork, the image subnetwork is trained to handle the image encoding process, incorporating semantic conditioning.
3.  **Final Model (G) Training:** Before the final training, checkpoints of the individually trained subnetworks are split into components. These components are then used for the final joint training, where the entire SQ-GAN model is optimized end-to-end to leverage the full semantic and image information flow.

## Results & Evaluation

The effectiveness of SQ-GAN is rigorously evaluated against state-of-the-art image compression techniques. Evaluation considers multiple metrics, including perceptual quality and semantic segmentation accuracy on the reconstructed images, particularly at extremely low compression rates. Results demonstrate SQ-GAN's significant superiority over methods like JPEG2000, BPG, and other deep-learning based approaches.

![comparison](/src/assets/projects/sqgan/comparison_bpg.png " mx-auto | Visual comparison at different compression rates between the proposed SQ-GAN (TOP) and the classical BPG (BOTTOM). The SSMs shown are generated from the reconstructed image via the SOTA SSModel INTERN-2.5. The proposed model is able to reconstruct images with higher semantic retention and lower values of BPP compared with BPG. The BPG algorithm is not able to compress images at lower values than 0.038 BPP, thus the comparison is limited to 0.038 and 0.078 BPP..")

`
};