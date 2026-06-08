import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, countryCode, phone, email, service, location, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email aur message required hain' },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      name,
      countryCode,
      phone,
      email,
      service,
      location,
      message,
    });

    return NextResponse.json(
      { success: true, message: 'Form submit ho gaya!', data: contact },
      { status: 201 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Kuch gadbad ho gayi' },
      { status: 500 }
    );
  }
}