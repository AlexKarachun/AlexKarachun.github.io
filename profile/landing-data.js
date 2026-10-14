// Kept in sync by hand with content/landing.md (Russian source, translated to English here).
const landingData = {
  ru: {
    name: "Александр Карачун",
    tagline: "Студент 4 курса «Прикладная математика и информатика», НИУ ВШЭ",
    bio: "Я — студент 4 курса «Прикладной математики и информатики» в НИУ ВШЭ, специализация в машинном обучении. Занимаюсь исследованиями в области diffusion-генерации и vision-language моделей на факультете компьютерных наук ВШЭ совместно с AIRI.",
    sections: {
      contacts: "Контакты",
      portfolio: "Портфолио",
      cv: "CV",
    },
    contacts: [
      { label: "Email", value: "alex_karachun@icloud.com", href: "mailto:alex_karachun@icloud.com" },
      { label: "Telegram", value: "@alex_karachun", href: "https://t.me/alex_karachun" },
      { label: "GitHub", value: "AlexKarachun", href: "https://github.com/AlexKarachun" },
    ],
    portfolio: [
      {
        title: "VLM-guided image generation",
        description: "Веду исследовательский проект на факультете компьютерных наук НИУ ВШЭ под руководством Айбека Аланова (AIRI): разработал три алгоритма VLM-guided генерации, инфраструктуру для экспериментов на нескольких GPU, проанализировал ограничения подходов.",
        link: "https://github.com/AlexKarachun/through_vlm_guidance_research_dev",
      },
      {
        title: "Self-Made Stable Diffusion 1.5",
        description: "Реализовал архитектуру и inference-пайплайн Stable Diffusion 1.5 на PyTorch с нуля: CLIP text encoder, VAE, U-Net, attention-слои, DDPM-сэмплер, classifier-free guidance. Добавил поддержку text-to-image и image-to-image.",
        link: "https://github.com/AlexKarachun/selfmade-stable-diffusion-1.5",
      },
      {
        title: "NeuroPushkin",
        description: "Собрал датасет из ~7000 синтетических текстов через OpenAI API и дообучил ruGPT-3 Medium для генерации прозы в стиле Пушкина. Исследовал абляции архитектур (RNN, GRU, LSTM, ruGPT-3) и токенизаторов, включая собственный BPE-токенизатор.",
        link: "https://github.com/AlexKarachun/neuroPushkin-nlp_project",
      },
    ],
  },
  en: {
    name: "Alexander Karachun",
    tagline: "4th-year Applied Mathematics and Information Science student, HSE University",
    bio: "I'm a 4th-year Applied Mathematics and Information Science student at HSE University, specializing in machine learning. I research diffusion-based generation and vision-language models at the HSE Faculty of Computer Science, in collaboration with AIRI.",
    sections: {
      contacts: "Contacts",
      portfolio: "Portfolio",
      cv: "CV",
    },
    contacts: [
      { label: "Email", value: "alex_karachun@icloud.com", href: "mailto:alex_karachun@icloud.com" },
      { label: "Telegram", value: "@alex_karachun", href: "https://t.me/alex_karachun" },
      { label: "GitHub", value: "AlexKarachun", href: "https://github.com/AlexKarachun" },
    ],
    portfolio: [
      {
        title: "VLM-guided image generation",
        description: "I'm running a research project at the HSE Faculty of Computer Science, supervised by Aibek Alanov (AIRI): I designed three VLM-guided generation algorithms and the multi-GPU experimentation infrastructure, and analyzed the approaches' limitations.",
        link: "https://github.com/AlexKarachun/through_vlm_guidance_research_dev",
      },
      {
        title: "Self-Made Stable Diffusion 1.5",
        description: "I implemented the Stable Diffusion 1.5 architecture and inference pipeline from scratch in PyTorch: CLIP text encoder, VAE, U-Net, attention layers, DDPM sampler, classifier-free guidance. I added support for text-to-image and image-to-image.",
        link: "https://github.com/AlexKarachun/selfmade-stable-diffusion-1.5",
      },
      {
        title: "NeuroPushkin",
        description: "I built a dataset of ~7,000 synthetic texts via the OpenAI API and fine-tuned ruGPT-3 Medium to write prose in Pushkin's style. I explored ablations over model architectures (RNN, GRU, LSTM, ruGPT-3) and tokenizers, including a custom-trained BPE tokenizer.",
        link: "https://github.com/AlexKarachun/neuroPushkin-nlp_project",
      },
    ],
  },
};
