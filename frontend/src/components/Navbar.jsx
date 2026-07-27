import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <a href="#" className="flex items-center">
            <Logo className="h-20 w-auto" />
            </a>
          {/* <h1 className="text-2xl font-bold text-slate-900">Kinesis</h1> */}
        </div>

        <div className="flex items-center gap-6">
          <a href="#servicos" className="text-slate-600 hover:text-blue-600 transition font-medium">Serviços</a>
          <a className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-sm" target='_blank' href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F558899527492%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn4WuHD2Q2GIvzl8teXWzjmEq1eoI7B_s30gSRqb0M0tbVQb4vEPnSLnNI4uQ_aem_6lUWG8VmMoJieY-17fJCxQ&e=AUAG8gDIVEMbHvIl2VIe_ycfAxigxNotr64H6OY3ZR3UHEVzpZ854HzutNT_DqyYiXa9FjQdFbNwAc9LIiqPn2K_I3RgZ4WVD7hbnzYp1IsPus7FBfDHZKIWfXLpgKD6QxsXZwIiIjIbLisoQtwLabs">
            Agendar Avaliação
          </a>
        </div>
      </div>
    </nav>
  );
}