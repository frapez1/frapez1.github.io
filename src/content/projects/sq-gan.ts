
export const sqGanProject = {
  slug: "sq-gan",
  title: "SQ-GAN: Semantic Image Communications Using Masked Vector Quantization",
  description: "Semantic Masked VQ-GAN selectively compressing images prioritizing relevant content at low bitrates. Achieved ~85% bitrate reduction while maintaining semantic fidelity.",
  longDescription: "This project introduces a novel approach to semantic image compression using masked vector quantization within a Generative Adversarial Network (GAN) framework. The system intelligently identifies and preserves semantically important regions while aggressively compressing less critical areas, achieving unprecedented compression ratios without significant loss of perceptual quality.",
  tech: ["PyTorch", "GANs", "Computer Vision", "Semantic Segmentation"],
  categories: ["Research Project", "Computer Vision"],
  externalLinks: {
    "View Code": "https://github.com/francesco-pezone/sq-gan",
    "Arxiv": "https://github.com/francesco-pezone/sq-gan"
  },
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
  results: [
    "85% bitrate reduction compared to traditional methods",
    "Preserved semantic fidelity in compressed images",
    "Real-time compression capabilities on GPU hardware",
    "Successfully tested on multiple datasets including COCO and ImageNet"
  ],
  challenges: [
    "Balancing compression ratio with semantic preservation",
    "Training stability in adversarial networks",
    "Computational efficiency for real-time applications"
  ],
  markdownContent: `

## 🧠 Overview

**SQ-GAN** is a deep generative model for semantic image compression, designed to prioritize **task-relevant content** during transmission. Instead of compressing all pixels equally, it learns to focus on **semantically important objects**, such as pedestrians and traffic signs in autonomous driving scenarios. This allows **extremely low bit-per-pixel (BPP)** rates while retaining crucial image information.

____________

## 🔧 Architecture

The model builds on the **VQ-GAN** framework and introduces a **Semantic-conditioned Adaptive Mask Module (SAMM)**. Key components include:

- Dual encoders and decoders for the image and its semantic segmentation map (SSM)
- Conditioning via SPADE normalization for semantic structure injection
- Vector quantization using learnable codebooks
- A semantic-aware discriminator that de-emphasizes non-relevant regions during training

____________

## 📊 Results

- Achieved **mean IoU saturation** at 0.025 BPP for segmentation retention
- Maintained **semantic fidelity** even at 0.011 BPP
- Visual quality superior to **BPG**, **JPEG2000**, and **HiFiC**, especially on semantically critical regions

____________

## 📚 Training Strategy

Training followed a three-phase process:
1. **Train semantic decoder (Gs)** with a weighted cross-entropy and VQ loss
2. **Train image decoder (Gx)** with perceptual (LPIPS), L2, and adversarial losses
3. **Fine-tune Gx** on reconstructed segmentation maps to mitigate semantic noise

Data augmentation was applied to increase exposure to rare classes (e.g., traffic lights), improving robustness.

____________

## 🧩 Key Takeaways

- Masking irrelevant information leads to **smarter compression**
- Semantic conditioning via SPADE layers can greatly enhance **reconstruction accuracy**
- Carefully designed training pipelines and discriminators are essential to **task-aware generation**
- loss $\\mathcal{L} = \\sum_i (x_i - \\hat{x}_i)^2$

____________

![SQ-GAN Architecture](/public/logo_FP.png "w-24 mx-auto | SQ-GAN system pipeline $\\mathcal{L} = \\sum_i (x_i - \\hat{x}_i)^2$")

____________

[🔗 GitHub Repo](https://github.com/frapez1/SQ-GAN)

  `

};