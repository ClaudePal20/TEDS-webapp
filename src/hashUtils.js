export const customHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash;
    }
    return (hash >>> 0).toString(32);
  };
  
  export const generateRandomHash = () => {
    const randomString = Math.random().toString(36).substring(2);
    return customHash(randomString);
  };
  