module.exports = {
  presetParser: {
    parserOpts: {
      headerPattern: /^(feat|fix|test|refactor|docs|chore)((mp-\d+)): (.+)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-format': [2, 'always'],

    'scope-format': [2, 'always'],

    'subject-format': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'type-format': (parsed) => {
          const validTypes = ['feat', 'fix', 'test', 'refactor', 'docs', 'chore'];
          const type = parsed.type;

          if (!type) {
            return [false, `Тип не может быть пустым. Пример допустимых типов: ${validTypes.join(", ")}.`];
          };

          if (validTypes.includes(type.toLowerCase()) && type !== type.toLowerCase()) {
            return [false, `Тип "${type}" должен быть написан в нижнем регистре.`];
          };

          if (!validTypes.includes(type)) {
            return [false, `Тип "${type}" не является допустимым. Допустимые типы: ${validTypes.join(", ")}.`];
          };

          return [true];
        },
        'scope-format': (parsed) => {
          const scope = parsed.scope;
          const regex = /^mp-\d+$/;

          if (!scope) {
            return [false, `Область не может быть пустой. Пример области: (mp-число)`];
          };

          if (scope !== scope.toLowerCase()) {
            return [false, `Область "${scope}" должна быть в нижнем регистре.`];
          };

          if (!regex.test(scope)) {
            return [false, `Область "${scope}" должна соответствовать формату "mp-число".`];
          };

          return [true];
        },
        'subject-format': (parsed) => {
          const subject = parsed.subject;
          const firstChar = subject ? subject.charAt(0) : '';

          if (!subject) {
            return [false, 'Комментарий не может быть пустым. Пример комментария: "Исправляет большой и страшный баг"'];
          };

          if (firstChar !== firstChar.toUpperCase()) {
            return [false, 'Комментарий должен начинаться с заглавной буквы. Пример комментария: "Исправляет большой и страшный баг"'];
          };

          return [true];
        },
      },
    },
  ],
};