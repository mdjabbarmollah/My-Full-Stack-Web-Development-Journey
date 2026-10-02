
type userRole = 'Admin' | 'User' | 'Moderator' | 'Guest';
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

let offDay = Day.Friday
console.log(Day.Thursday);

if (offDay === Day.Friday || offDay === Day.Friday) {
  console.log("today is holiday");
}

enum Fahad {
  Admin = 'Admin',
  moderator = 'Moderator'
}
console.log(Fahad.Admin)
const nandu = {
  name: 'chandu',
  role: Fahad.moderator
}
console.log(nandu)
enum priority {
  low,
  moderator,
  meidum,
  high,
 urgent
}

enum status  {
  loading = 'loading',
  pending = 'pending',
  error = 'error'
}
