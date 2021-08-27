export default function getName(string: string) {
  let name = string;
  const dirs = [''];
  dirs.shift();
  for (const word of name.split('/')) {
    dirs.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  name = dirs
    .join('/')
    .replace('.js', '')
    .replace('.ts', '')
    .replace('.jsx', '')
    .replace('.tsx', '');

  return name;
}
