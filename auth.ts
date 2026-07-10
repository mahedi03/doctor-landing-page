// এখানে আপনার পছন্দের পাসওয়ার্ড বসান।
// চাইলে .env.local এ NEXT_PUBLIC_PRESCRIPTION_PASSWORD=yourpassword দিয়েও সেট করতে পারেন —
// তাহলে কোডে হার্ডকোড না করেই পাসওয়ার্ড বদলানো যাবে।
// (মনে রাখবেন: NEXT_PUBLIC_ দিয়ে শুরু হওয়া env variable ব্রাউজারের বান্ডলেও থাকে,
// যেহেতু ব্যাকএন্ড নেই এটাই স্বাভাবিক — এটা কোনো সিক্রেট-লেভেল সিকিউরিটি না।)
export const PRESCRIPTION_PASSWORD =
  process.env.NEXT_PUBLIC_PRESCRIPTION_PASSWORD || "changeme123";
