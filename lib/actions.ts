'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { Cart, CartItem } from '@/components/utils/cart-types';
import { getCartId } from './get-cart-id';

// Using a fallback here so we don't need to make the BACKEND_URL part of the env,
// which makes using the template easy..
const BACKEND_URL =
  process.env.BACKEND_URL || 'https://shirt-shop-api.labs.vercel.dev';

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function setCartIdCookie(cartId: string) {
  const cookiesStore = await cookies();
  cookiesStore.set('cart-id', cartId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });
}

export async function getCart(): Promise<Cart> {
  const cartId = await getCartId();
  // Using default value: delayMs = 0 (no delay)
  const delayMs = 0;
  await delay(delayMs);
  return fetch(`${BACKEND_URL}/api/cart/${cartId.value}`).then((res) =>
    res.json(),
  );
}

export async function addToCart(item: CartItem) {
  const cartId = await getCartId();
  
  // If this is a fresh cart ID, set the cookie
  if (cartId.isFresh) {
    await setCartIdCookie(cartId.value);
  }
  
  await fetch(`${BACKEND_URL}/api/cart/${cartId.value}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  revalidatePath('/cart');
}

export async function removeFromCart(item: CartItem) {
  const cartId = await getCartId();
  await fetch(`${BACKEND_URL}/api/cart/${cartId.value}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  revalidatePath('/cart');
}
