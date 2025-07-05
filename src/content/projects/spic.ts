
export const spicProject = {
  slug: "spic",
  title: "SPIC: Semantic-Preserving Image Coding based on Conditional Diffusion Models",
  description: "Diffusion-based image and semantic maps compression model for high-fidelity semantic reconstruction. Integrates advanced diffusion models with semantic understanding.",
  longDescription: "SPIC introduces a revolutionary approach to image compression using conditional diffusion models. By leveraging the power of diffusion processes, we achieve superior semantic preservation while maintaining competitive compression ratios. The model learns to reconstruct images by focusing on semantically important regions first.",
  tech: ["Diffusion Models", "PyTorch", "Semantic Analysis", "Conditional Generation"],
  categories: ["Research Project", "Generative AI"],
  externalLinks: {
    "github": "https://github.com/francesco-pezone/spic"
  },
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
  results: [
    "State-of-the-art semantic preservation scores",
    "Competitive compression ratios with traditional methods",
    "Superior perceptual quality in human evaluation studies",
    "Robust performance across diverse image categories"
  ],
  challenges: [
    "Managing computational complexity of diffusion processes",
    "Balancing generation quality with compression efficiency",
    "Ensuring semantic consistency across different image types"
  ],
  markdownContent: `
## Diffusion-Based Architecture

SPIC leverages conditional diffusion models to achieve semantic-preserving image compression. The architecture consists of an encoder that maps images to a compressed latent space, and a conditional diffusion decoder that reconstructs the image while preserving semantic content.

![SPIC Architecture](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop "SPIC diffusion-based compression pipeline")

The key innovation lies in the conditioning mechanism that guides the diffusion process to prioritize semantically important regions during reconstruction.

## Results and Evaluation

| Metric | SPIC | Traditional | Improvement |
|--------|------|-------------|-------------|
| Semantic Similarity | 0.94 | 0.78 | +20.5% |
| LPIPS | 0.12 | 0.23 | -47.8% |
| Compression Ratio | 75% | 70% | +5% |

## Applications

This work has significant implications for various applications including medical imaging, autonomous systems, and content delivery networks where semantic fidelity is crucial.
  `
};
