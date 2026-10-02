let value: unknown;
 
let myValue = value as string
const uppi = myValue.toUpperCase();
const yourValue = value as number;
yourValue.toFixed();

let data: unknown
interface User {
  name: string;
  email?: string;
}
const userData = data as User;
userData.name

// as const 
const kamruzzaman: User = {
  name: 'kamruzzaman ',
  email: 'kam@swizerland.com'
} as const;
kamruzzaman.name = 'bogda kamru';
