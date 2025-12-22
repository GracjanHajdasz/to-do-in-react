# Todo React App

Prosta aplikacja do zarządzania zadaniami (To-Do List) zbudowana w React + Vite.

## 📋 Opis

Aplikacja umożliwia dodawanie, usuwanie i zarządzanie listą zadań. Posiada intuicyjny interfejs użytkownika z możliwością szybkiego dodawania zadań za pomocą klawisza Enter oraz czyszczenia całej listy jednym kliknięciem.

## ✨ Funkcjonalności

- ➕ Dodawanie nowych zadań
- 🗑️ Usuwanie pojedynczych zadań
- 🧹 Czyszczenie całej listy zadań
- ⌨️ Skróty klawiszowe:
  - `Enter` - dodaj zadanie
  - `Escape` - wyczyść pole tekstowe
- ☑️ Checkbox przy każdym zadaniu
- 🎨 Responsywny design

## 🖼️ Screenshoty

### Interfejs główny
![Główny interfejs aplikacji](./screenshots/main-interface.png)
*Widok główny aplikacji z polem do dodawania zadań*

### Lista zadań
![Lista zadań](./screenshots/task-list.png)
*Przykładowa lista zadań z przyciskami Delete*

### Responsywność
![Widok mobilny](./screenshots/mobile-view.png)
*Aplikacja na urządzeniach mobilnych*

## 🛠️ Technologie

- React 18
- Vite
- JavaScript (ES6+)
- CSS3

## 📁 Struktura projektu

```
TODO_REACT/
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Task.css
│   │   │   └── Task.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── screenshots/          # Folder ze screenshotami
│   │   ├── demo.gif
│   │   ├── main-interface.png
│   │   ├── task-list.png
│   │   └── mobile-view.png
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
└── README.md
```

## 🚀 Instalacja i uruchomienie

### Wymagania wstępne

- Node.js (wersja 14 lub nowsza)
- npm lub yarn

### Kroki instalacji

1. Sklonuj repozytorium:
```bash
git clone <url-repozytorium>
cd TODO_REACT/frontend
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom aplikację w trybie deweloperskim:
```bash
npm run dev
```

4. Otwórz przeglądarkę i przejdź do `http://localhost:5173`

## 📦 Skrypty

- `npm run dev` - uruchamia serwer deweloperski
- `npm run build` - buduje aplikację do produkcji
- `npm run preview` - podgląd wersji produkcyjnej
- `npm run lint` - sprawdza kod pod kątem błędów

## 💡 Jak korzystać

1. Wpisz nazwę zadania w pole tekstowe
2. Naciśnij `Enter` lub kliknij przycisk "Add" aby dodać zadanie
3. Kliknij przycisk "Delete" przy zadaniu, aby je usunąć
4. Użyj przycisku "Clear All" aby wyczyścić całą listę
5. Zaznacz checkbox, aby oznaczyć zadanie (funkcjonalność wizualna)

![Tutorial](./screenshots/how-to-use.png)

## 🎯 Przykład użycia

```javascript
// Dodawanie zadania
const newTask = { task: "Kupić mleko", id: crypto.randomUUID() };
setAllTasks([...allTasks, newTask]);

// Usuwanie zadania
const filteredTasks = allTasks.filter(task => task.id !== taskId);
setAllTasks(filteredTasks);
```

## 🔮 Przyszłe rozszerzenia

- [ ] Edycja istniejących zadań
- [ ] Zapisywanie zadań w localStorage
- [ ] Filtrowanie zadań (wszystkie/aktywne/ukończone)
- [ ] Zaznaczanie zadań jako ukończone
- [ ] Sortowanie zadań
- [ ] Dark mode
- [ ] Kategorie zadań
- [ ] Priorytety zadań

## 🤝 Wkład w projekt

Chętnie przyjmuję pull requesty! Jeśli chcesz dodać nową funkcjonalność:

1. Zrób fork projektu
2. Stwórz branch z nową funkcjonalnością (`git checkout -b feature/NowaFunkcja`)
3. Commit zmiany (`git commit -m 'Dodaj nową funkcję'`)
4. Push do brancha (`git push origin feature/NowaFunkcja`)
5. Otwórz Pull Request

## 📄 Licencja

MIT License - możesz swobodnie używać i modyfikować kod.

