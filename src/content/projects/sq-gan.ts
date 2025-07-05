
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
## Implementation Details

The implementation of SQ-GAN required careful consideration of multiple architectural components. The encoder network utilizes a ResNet-based backbone for feature extraction, while the quantization module employs learned vector codebooks to represent semantic regions efficiently.

![SQ-GAN Architecture Diagram](https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop "Figure 1: SQ-GAN architecture showing the encoder-decoder structure with masked quantization")

| Dataset | Compression Ratio | PSNR (dB) | SSIM |
|---------|------------------|-----------|------|
| COCO | 85% | 28.5 | 0.89 |
| ImageNet | 82% | 27.8 | 0.87 |
| CelebA | 88% | 29.2 | 0.91 |

## Future Work

Future research directions include extending the approach to video compression, where temporal consistency becomes crucial for maintaining semantic coherence across frames. We are also exploring adaptive quantization strategies that can dynamically adjust compression levels based on content complexity.
  `
};
