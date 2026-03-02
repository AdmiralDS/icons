# AdmiralDS Icons

**AdmiralDS Icons** — официальная библиотека SVG-иконок для продуктов Admiral Design System.  
Все иконки доступны в двух стилях: **Outline** и **Solid**, сгруппированы по категориям (bank, documents, finance, cards, redact и др.).

SVG-иконки поставляются как исходные файлы и в виде готовых React-компонентов.  
SVG-файлы совместимы с современными сборщиками, поддерживающими импорт статических ресурсов.

---

## 📁 Каталог иконок

Полный перечень иконок, сгруппированный по категориям:  
**https://admiralds.github.io/icons**

---

## 📘 Документация

Подробная информация по использованию, настройке и примеры:  
**https://admiralds.github.io/icons/?path=/story/icons-icons--loaders**

---

## 📦 Установка

    npm install @admiral-ds/icons

---

## 🚀 Использование

Иконки можно подключать двумя способами.

### **1. Импорт SVG через лоадер**

(Vite поддерживает такой импорт по умолчанию)

    import Broker from '@admiral-ds/icons/build/cards/Broker.svg?react';

    export function Example() {
      return <Broker width={24} height={24} />;
    }

---

### **2. Импорт готового React-компонента**

(лоадер не требуется)

    import { CardsBroker } from '@admiral-ds/icons';

    export function Example() {
      return <CardsBroker width={24} height={24} />;
    }

React-компоненты поддерживают все стандартные SVG-props (`width`, `height`, `fill` и др.)

---

## 🧩 Форматы

- **Outline** — контурные иконки, подходят для интерфейсных элементов.
- **Solid** — залитые иконки, хорошо читаются в маленьких размерах.

---

## 🛠 Обратная связь и новости

Если вы нашли ошибку в иконке или хотите предложить новую, создайте issue или PR в репозитории:  
https://github.com/AdmiralDS/icons

Следить за обновлениями Admiral Design System можно в Telegram:  
https://t.me/admiral_dev
