import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

const useStore = create(
    persist(
      (set, get) => ({
        theme: 'dark',

        setTheme () {
            set({theme: get().theme === 'dark' ? 'light' : 'dark'});
        },
        answers: [],
        setAnswers (answer, id) { 
            var curr = {id: id, answer: answer};
            var answers = get().answers.filter((item) => item.id !== id);
            answers.push(curr);
            set({answers: answers});

        },
        getAnswers: () => (get().answers),
      }),
      {
        name: 'answers',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  );

export default useStore;