export async function getData() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/api/getMessages`
    );
    if(!response.ok) throw new Error('Error fetching data');
    const data= await response.json();
    return data || null;
  }