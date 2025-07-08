export const spicProject = {
  slug: "spic",
  title: "SPIC: Semantic-Preserving Image Coding based on Conditional Diffusion Models",
  description: "SPIC is a novel semantic image coding scheme that uses conditional diffusion models to preserve semantic content while achieving a better trade-off between comprassion rate and image quality compared to classic image codecs.",
  longDescription: "This project introduces Semantic-Preserving Image Coding based on Conditional Diffusion Models (SPIC), a method that prioritizes the meaning and goal of communication over bit-by-bit recovery. It encodes a semantic segmentation map and a low-resolution image, then uses a doubly-conditioned Denoising Diffusion Probabilistic Model (DDPM) to reconstruct a high-resolution image, outperforming state-of-the-art approaches in semantic preservation and rate-distortion trade-off.",
  tech: ["Deep Learning", "Diffusion Models", "Semantic Segmentation", "Super-Resolution", "PyTorch", "Python", "U-Net"],
  categories: ["Signal Processing", "Machine Learning", "Communications"],
  externalLinks: {
    "Paper": "https://arxiv.org/abs/2310.15737",
    "View Code": "https://github.com/frapez1/SPIC",
  },
  image: "https://images.unsplash.com/photo-1624302772765-2a3db4888b99?w=1200&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.85", // Placeholder. Image placement suggested in markdown.
  results: [
    "Achieves a better balance between conventional rate-distortion trade-off and the preservation of semantically-relevant features compared to SOTA.",
    "Enables much better reconstruction and positioning of semantically relevant objects, especially small ones.",
    "Outperforms classical compression algorithms (BPG, JPEG2000) and SOTA Super-Resolution models in semantic retention (mIoU) at lower BPP.",
    "Reconstructs images with low Fréchet Inception Distance (FID), indicating high perceptual quality."
  ],
  challenges: [
    "Developing a dual-conditioning mechanism for DDPMs based on both semantic maps and low-resolution images.",
    "Ensuring the preservation of semantic content, especially for small objects, at very low bit rates.",
    "Integrating off-the-shelf semantic segmentation and compression tools into a modular diffusion model framework.",
    "Balancing fidelity reconstruction with the ability to extract semantic features from reconstructed images."
  ],
  markdownContent: `
Semantic communication is revolutionizing how we think about transmitting information, shifting focus from perfect bit-by-bit recovery to preserving the essential meaning and goal of the communication itself. In this context, SPIC (Semantic-Preserving Image Coding based on Conditional Diffusion Models) offers a novel approach to image compression. It's designed for scenarios where the semantic content of an image is paramount, such as in autonomous vehicles needing to accurately identify pedestrians or traffic signs, even if the overall image quality is slightly reduced for efficiency. SPIC ensures that critical semantic details are retained, striking a superior balance between compression rates and image quality compared to traditional methods.

## Proposed Method

The SPIC framework utilizes a sophisticated encoder-decoder architecture. The transmitter side generates a Semantic Segmentation Map (SSM) using an off-the-shelf high-performance model and a low-resolution version of the original image, both compressed for efficiency. These two crucial pieces of information are then sent to the receiver. The receiver employs a powerful Semantic-Conditioned Super-Resolution Diffusion Model (SemCoRe) to reconstruct the full-resolution image. This model is uniquely doubly-conditioned on both the received SSM and the coarse low-resolution image, enabling it to progressively refine the image from noise into a high-fidelity, semantically accurate reconstruction.

![general_scheme](/src/assets/projects/spic/schema.png "mx-auto | Overview of the SPIC Architecture. The diagram illustrates our novel approach, combining a Semantic Segmentation Map (s) and a coarse low-resolution image (c), both compressed with classical off-the-shelf algorithms for efficient encoding. The reconstruction employs the proposed Semantic-Conditioned Super-Resolution Diffusion Model, leveraging both s and c for high-fidelity semantic-relevant image recovery even at low BPP.")

## Key Features

SPIC differentiates itself through several key features:

* **Dual Conditioning:** The core of SPIC's decoder is its ability to be conditioned on two inputs: the semantic segmentation map and a coarse version of the image. This dual guidance ensures that the reconstruction is both semantically accurate and visually coherent.
* **Modular Architecture:** SPIC adopts a modular design, allowing for the use of state-of-the-art, task-specific algorithms for semantic segmentation (e.g., InternImage) and classical compression (e.g., BPG, FLIF). This simplifies implementation, enables separate control of tasks, and allows for easy improvements by replacing individual components without retraining the entire model.
* **Diffusion Model Super-Resolution:** By leveraging Denoising Diffusion Probabilistic Models (DDPMs), SPIC benefits from their renowned image synthesis capabilities, leading to superior reconstruction quality.
* **Semantic Preservation:** SPIC explicitly prioritizes the preservation of semantic information, addressing a common drawback of classical compression algorithms that may degrade semantically relevant objects, especially small ones.

## Evaluation and Results

SPIC's training process involves an end to end training of the whole framework. Every image and associated semantic segmentation maps are compressed and used as input of the SemCoRe model. This model is traind in a super resolution fashon to optimize perceptial similarity. The performance of SPIC is rigorously evaluated using metrics that go beyond traditional pixel-by-pixel comparisons, focusing on semantic retention and perceptual quality.

**Key Metrics:**
* **Mean Intersection over Union (mIoU):** Quantifies the overlap between ground truth and predicted semantic regions, assessing semantic segmentation retention.
* **Fréchet Inception Distance (FID):** A widely used metric that compares the feature distributions of original and reconstructed images, capturing perceptual quality aspects like blurriness and artifacts.
* **Bits Per Pixel (BPP):** Measures the compression rate achieved by the encoding process.

SPIC consistently **outperforms existing compression algorithms** like BPG and JPEG2000 in terms of mIoU at comparable or even lower BPPs. This indicates SPIC's superior ability to **preserve semantic content** even at very high compression ratios. Furthermore, SPIC achieves **low FID scores**, demonstrating its capability to reconstruct images with high perceptual quality while maintaining semantic integrity. For example, visual comparisons show SPIC's reconstructed images clearly revealing small, semantically important objects (like pedestrians and road signs) that are often lost or indistinguishable in images compressed by conventional methods.

![results](/src/assets/projects/spic/results.png " mx-auto | Visual comparison between the original image and SSM (CENTER), the image compressed with BPG at 0.176 BPP with the associated generated SSM (LEFT), and the image obtained with the proposed SPIC framework at 0.166 BPP and the associated generated SSM (RIGHT). At similar values of BPP the proposed approach preserves semantically relevant details better than BPG. The person riding the bicycle is clearly detected by the generated SSM.")


`
};