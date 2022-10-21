import { ref } from 'vue';

export function useRandomRange(minValue: number, maxValue: number) {
  const result = ref();

  result.value = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

  return { result };
}
