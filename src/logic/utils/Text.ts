export class TextFormat {
   private static cpfPattern = "???.???.???-??"
   private static phonePattern = "(??) ?????-????"

   static textName(value: string, min: number, max: number, trim: boolean = true): boolean {
      const newValue = (trim ? value?.trim?.() : value) ?? ''
      return newValue.length >= min && newValue.length <= max
   }

   static cpfUnformat(value: string): string {
      return value.replace(/[^0-9]/g, '')
   }

   static cpfFormat(value: string): string {
      const numbers = TextFormat.cpfUnformat(value).split('') //array com os números separados
      return numbers.reduce((format: string, number: string) => {
         return format.replace('?', number)
      }, TextFormat.cpfPattern).split('?')[0].replace(/[-.]$/, '')
   }

   static phoneUnformat(value: string) : string {
      return value.replace(/[^0-9]/g, '')
   }

   static phoneFormat(value: string): string {
      const numbers = TextFormat.phoneUnformat(value).split('') //array com os números separados
      return numbers.reduce((format: string, number: string) => {
         return format.replace('?', number)
      }, TextFormat.phonePattern).split('?')[0].trim().replace(/[()-]$/, '')
   }
}