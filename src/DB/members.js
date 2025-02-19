import photoMisha from "../assets/images/avatars/misha.jpg";
import photoRuslan from "../assets/images/avatars/ruslan.jpg";
import photoNikita from "../assets/images/avatars/nikita.jpg";

export const teamMembers = [
  {
    id: 0,
    name: "Сивоконь Михаил",
    age: "30",
    role: "Team lead разработки",
    photo: photoMisha, // Замените на URL фотографии
    description:
        "Михаил отвечает за управление командой, распределение задач и обеспечение высокого качества разработки. Его опыт и лидерские качества помогают команде эффективно достигать поставленных целей.",
    tasks: [
      "Управление командой разработки.",
      "Распределение задач между участниками.",
      "Контроль сроков выполнения задач.",
      "Решение сложных технических проблем.",
      "Оценка качества разрабатываемого продукта.",
    ],
  },
  {
    id: 1,
    name: "Мамедбеков Руслан",
    age: "27",
    role: "Разработчик Frontend",
    photo: photoRuslan, // Замените на URL фотографии
    description:
        "Руслан занимается разработкой пользовательского интерфейса, внедрением новых технологий и созданием интерактивных и удобных веб-приложений.",
    tasks: [
      "Разработка пользовательских интерфейсов.",
      "Создание адаптивных дизайнов для разных устройств.",
      "Реализация сложных UI-компонентов.",
      "Интеграция API в клиентскую часть.",
      "Оптимизация скорости загрузки и рендеринга приложения.",
    ],
  },
  {
    id: 2,
    name: "Никита Рябиков",
    age: "25",
    role: "Разработчик Frontend",
    photo: photoNikita, // Замените на URL фотографии
    description:
        "Никита специализируется на создании адаптивных дизайнов и оптимизации фронтенд-кода для обеспечения быстродействия и удобства использования.",
    tasks: [
      "Разработка адаптивного и кроссбраузерного интерфейса.",
      "Оптимизация кода для повышения производительности.",
      "Написание тестов для проверки клиентской части.",
      "Работа с библиотеками и фреймворками (например, React).",
      "Обновление и поддержка существующего кода.",
    ],
  },
];
