// Kept in sync by hand with CV/current/resume_en.tex and resume_ru.tex.
const cvData = {
  ru: {
    name: "Александр Карачун",
    tagline: "Студент 4 курса, «Прикладная математика и информатика»",
    contacts: [
      { label: "alex_karachun@icloud.com", href: "mailto:alex_karachun@icloud.com" },
      { label: "+7 985 459-98-04", href: "tel:+79854599804" },
      { label: "github.com/AlexKarachun", href: "https://github.com/AlexKarachun" },
      { label: "t.me/alex_karachun", href: "https://t.me/alex_karachun" },
    ],
    pdf: "cv/resume_ru.pdf",
    sections: {
      experience: "Опыт работы",
      education: "Образование",
      coursework: "Профильные курсы",
      projects: "Учебные проекты",
      skills: "Навыки",
      interests: "Личные интересы",
      download: "Скачать PDF",
    },
    experience: [
      {
        role: "Исследователь (студент)",
        org: "НИУ ВШЭ / AIRI",
        period: "2025 — н.в.",
        intro: "Исследовательский проект по VLM-guided генерации изображений, выполняется на факультете компьютерных наук НИУ ВШЭ под руководством Айбека Аланова, научного сотрудника AIRI.",
        bullets: [
          "Разработал и реализовал три алгоритма VLM-guided генерации и инфраструктуру для экспериментов на нескольких GPU, опираясь на широкий обзор литературы по diffusion guidance и vision-language методам.",
          "Провёл масштабные эксперименты для выявления наиболее эффективного подхода, проанализировал его ограничения и подготовил результаты к публикации.",
        ],
      },
      {
        role: "Ассистент преподавателя",
        org: "НИУ ВШЭ, факультет компьютерных наук",
        period: "2025 — 2026",
        intro: "Курс «Машинное обучение 1» для студентов бакалавриата.",
        bullets: [
          "Готовил учебные материалы и помогал студентам разбираться в основных концепциях машинного обучения.",
          "Проверял домашние задания у группы из 15 студентов.",
          "Принимал экзамены и оценивал работы студентов.",
        ],
      },
      {
        role: "Ассистент организатора",
        org: "Всероссийская олимпиада по ИИ",
        period: "2026",
        bullets: [
          "Помогал в организации олимпиады, подготовив соревновательный датасет для организаторов.",
        ],
      },
    ],
    education: {
      school: "НИУ ВШЭ, Москва",
      period: "2023 — 2027",
      degree: "Бакалавриат, Прикладная математика и информатика",
      note: "Студент 4 курса; специализация «Машинное обучение и приложения»",
    },
    coursework: [
      "Глубокое обучение и NLP: Глубинное обучение; Машинное обучение 1-2; NLP, ШАД; Методы оптимизации в ML; Научно-исследовательский семинар; Hugging Face Agents Course.",
      "Математика: Математическая статистика; Теория вероятностей.",
      "Системы: CUDA; Алгоритмы и структуры данных.",
    ],
    projects: [
      {
        title: "Self-Made Stable Diffusion 1.5",
        link: "https://github.com/AlexKarachun/selfmade-stable-diffusion-1.5",
        bullets: [
          "Реализовал архитектуру и inference-пайплайн Stable Diffusion 1.5 на PyTorch, включая CLIP text encoder, VAE, U-Net, attention-слои, DDPM-сэмплер и classifier-free guidance.",
          "Добавил поддержку генерации text-to-image и image-to-image.",
        ],
      },
      {
        title: "NeuroPushkin",
        link: "https://github.com/AlexKarachun/neuroPushkin-nlp_project",
        bullets: [
          "Собрал датасет из примерно 7 000 синтетических текстов через OpenAI API и дообучил ruGPT-3 Medium для генерации прозы в стиле Александра Пушкина.",
          "Исследовал пространство решений через абляции архитектур моделей (RNN, GRU, LSTM, ruGPT-3) и токенизаторов, включая самостоятельно обученный BPE-токенизатор.",
        ],
      },
    ],
    skills: [
      { label: "ML/DL", value: "Python, PyTorch, Datasets, Transformers, Diffusers, Hydra" },
      { label: "Инструменты", value: "Comet, TensorBoard, SQLAlchemy" },
      { label: "AI-агенты", value: "MCP, smolagents, LangGraph, LlamaIndex" },
      { label: "Системы", value: "C++, CUDA, Triton, основы Linux" },
    ],
    interests: [
      "Увлечён deep learning и последовательно осваиваю область за областью — от классического CV и NLP до LLM, диффузионной генерации изображений и текста, VLA и разработки agent harness — и с радостью углублюсь в любую из них или возьмусь за новые.",
      "Скоростная печать: уровень 230 на Monkeytype, личный рекорд — 129 слов в минуту.",
    ],
  },
  en: {
    name: "Alexander Karachun",
    tagline: "4th-year Applied Mathematics and Information Science Student",
    contacts: [
      { label: "alex_karachun@icloud.com", href: "mailto:alex_karachun@icloud.com" },
      { label: "+7 985 459-98-04", href: "tel:+79854599804" },
      { label: "github.com/AlexKarachun", href: "https://github.com/AlexKarachun" },
      { label: "t.me/alex_karachun", href: "https://t.me/alex_karachun" },
    ],
    pdf: "cv/resume_en.pdf",
    sections: {
      experience: "Professional Experience",
      education: "Education",
      coursework: "Relevant Coursework",
      projects: "Course Projects",
      skills: "Technical Skills",
      interests: "Personal Interests",
      download: "Download PDF",
    },
    experience: [
      {
        role: "Student Researcher",
        org: "HSE University / AIRI",
        period: "2025 — Present",
        intro: "Research project on VLM-guided image generation, conducted at the HSE Faculty of Computer Science under the supervision of Aibek Alanov, a scientist at AIRI.",
        bullets: [
          "Designed and implemented three VLM-guided generation algorithms and the supporting multi-GPU experimentation infrastructure, building on a broad literature review of diffusion guidance and vision-language methods.",
          "Ran extensive experiments to identify the most effective approach, analyzed its limitations, and prepared the results for publication.",
        ],
      },
      {
        role: "Teaching Assistant",
        org: "HSE University, Faculty of Computer Science",
        period: "2025 — 2026",
        intro: "Machine Learning 1 course for undergraduate students.",
        bullets: [
          "Prepared course materials and supported students with core machine learning concepts.",
          "Graded homework for a cohort of 15 students.",
          "Administered examinations and assessed student submissions.",
        ],
      },
      {
        role: "Olympiad Organization Assistant",
        org: "Russian National AI Olympiad",
        period: "2026",
        bullets: [
          "Assisted in organizing the Olympiad by creating a competition dataset for its organizers.",
        ],
      },
    ],
    education: {
      school: "HSE University, Moscow",
      period: "2023 — 2027",
      degree: "BSc in Applied Mathematics and Information Science",
      note: "Fourth-year student; specialization in Machine Learning and Applications",
    },
    coursework: [
      "Deep Learning and NLP: Deep Learning; Machine Learning 1-2; NLP, Yandex School of Data Analysis; Optimization Methods for ML; Research Seminar; Hugging Face Agents Course.",
      "Mathematics: Mathematical Statistics; Probability Theory.",
      "Systems: CUDA; Algorithms and Data Structures.",
    ],
    projects: [
      {
        title: "Self-Made Stable Diffusion 1.5",
        link: "https://github.com/AlexKarachun/selfmade-stable-diffusion-1.5",
        bullets: [
          "Implemented the Stable Diffusion 1.5 architecture and inference pipeline in PyTorch, including the CLIP text encoder, VAE, U-Net, attention layers, DDPM sampler, and classifier-free guidance.",
          "Built support for text-to-image and image-to-image generation.",
        ],
      },
      {
        title: "NeuroPushkin",
        link: "https://github.com/AlexKarachun/neuroPushkin-nlp_project",
        bullets: [
          "Built a dataset of approximately 7,000 synthetic texts through the OpenAI API and fine-tuned ruGPT-3 Medium to generate prose in Alexander Pushkin's style.",
          "Explored the design space through ablations over model architectures (RNN, GRU, LSTM, ruGPT-3) and tokenizers, including a custom-trained BPE tokenizer.",
        ],
      },
    ],
    skills: [
      { label: "ML/DL", value: "Python, PyTorch, Datasets, Transformers, Diffusers, Hydra" },
      { label: "Tools", value: "Comet, TensorBoard, SQLAlchemy" },
      { label: "AI Agents", value: "MCP, smolagents, LangGraph, LlamaIndex" },
      { label: "Systems", value: "C++, CUDA, Triton, basics of Linux" },
    ],
    interests: [
      "Deeply passionate about deep learning, methodically building expertise area by area — from classical CV and NLP to LLMs, diffusion-based generation (images and text), VLA, and agent harness development — and eager to go deeper into any of these or take on new ones.",
      "Speed typing: reached level 230 on Monkeytype, with a personal best of 129 words per minute.",
    ],
  },
};
