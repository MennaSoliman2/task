// Language management for the Guest Inquiry System
(function() {
  // Translations object (replace with your actual translations)
  const translations = {
    en: {
      'welcome_message': 'Welcome',
      'identify_yourself': 'Please identify yourself',
      'current_location_label': 'You are currently in: {location}',
      'guest_name_label': 'Guest Name:',
      'guide_name_label': 'Guide Name:',
      'next': 'Next',
      'back': 'Back',
      'submit': 'Submit',
      'cancel': 'Cancel',
      'confirm': 'Confirm',
      'loading': 'Loading...',
      'error': 'Error',
      'success': 'Success',
      'please_wait': 'Please wait...',
      'search': 'Search',
      'no_results_found': 'No results found.',
      'enter_your_name': 'Enter your name',
      'enter_your_id': 'Enter your ID',
      'select_your_language': 'Select your language',
      'select_your_location': 'Select your location',
      'select_your_guide': 'Select your guide',
      'select_your_destination': 'Select your destination',
      'select_your_purpose': 'Select your purpose',
      'select_your_transportation': 'Select your transportation',
      'select_your_room': 'Select your room',
      'select_your_meal': 'Select your meal',
      'select_your_activity': 'Select your activity',
      'select_your_service': 'Select your service',
      'select_your_product': 'Select your product',
      'select_your_item': 'Select your item',
      'select_your_date': 'Select your date',
      'select_your_time': 'Select your time',
      'select_your_quantity': 'Select your quantity',
      'select_your_size': 'Select your size',
      'select_your_color': 'Select your color',
      'select_your_payment_method': 'Select your payment method',
      'select_your_currency': 'Select your currency',
      'select_your_country': 'Select your country',
      'select_your_city': 'Select your city',
      'select_your_address': 'Select your address',
      'select_your_phone_number': 'Select your phone number',
      'select_your_email': 'Select your email',
      'select_your_password': 'Select your password',
      'select_your_confirm_password': 'Select your confirm password',
      'select_your_gender': 'Select your gender',
      'select_your_age': 'Select your age',
      'select_your_nationality': 'Select your nationality',
      'select_your_occupation': 'Select your occupation',
      'select_your_company': 'Select your company',
      'select_your_department': 'Select your department',
      'select_your_position': 'Select your position',
      'select_your_employee_id': 'Select your employee ID',
      'select_your_supervisor': 'Select your supervisor',
      'select_your_project': 'Select your project',
      'select_your_task': 'Select your task',
      'select_your_priority': 'Select your priority',
      'select_your_status': 'Select your status',
      'select_your_description': 'Select your description',
      'select_your_attachment': 'Select your attachment',
      'select_your_comments': 'Select your comments',
      'select_your_signature': 'Select your signature',
      'select_your_terms_and_conditions': 'Select your terms and conditions',
      'select_your_privacy_policy': 'Select your privacy policy',
      'select_your_cookie_policy': 'Select your cookie policy',
      'select_your_accessibility_statement': 'Select your accessibility statement',
      'select_your_security_statement': 'Select your security statement',
      'select_your_disclaimer': 'Select your disclaimer',
      'select_your_copyright': 'Select your copyright',
      'select_your_trademark': 'Select your trademark',
      'select_your_patent': 'Select your patent',
      'select_your_license': 'Select your license',
      'select_your_agreement': 'Select your agreement',
      'select_your_contract': 'Select your contract',
      'select_your_invoice': 'Select your invoice',
      'select_your_receipt': 'Select your receipt',
      'select_your_order': 'Select your order',
      'select_your_shipment': 'Select your shipment',
      'select_your_delivery': 'Select your delivery',
      'select_your_return': 'Select your return',
      'select_your_refund': 'Select your refund',
      'select_your_exchange': 'Select your exchange',
      'select_your_warranty': 'Select your warranty',
      'select_your_support': 'Select your support',
      'select_your_feedback': 'Select your feedback',
      'select_your_review': 'Select your review',
      'select_your_rating': 'Select your rating',
      'select_your_recommendation': 'Select your recommendation',
      'select_your_suggestion': 'Select your suggestion',
      'select_your_complaint': 'Select your complaint',
      'select_your_inquiry': 'Select your inquiry',
      'select_your_question': 'Select your question',
      'select_your_answer': 'Select your answer',
      'select_your_solution': 'Select your solution',
      'select_your_resolution': 'Select your resolution',
      'select_your_update': 'Select your update',
      'select_your_upgrade': 'Select your upgrade',
      'select_your_download': 'Select your download',
      'select_your_upload': 'Select your upload',
      'select_your_install': 'Select your install',
      'select_your_uninstall': 'Select your uninstall',
      'select_your_configure': 'Select your configure',
      'select_your_customize': 'Select your customize',
      'select_your_personalize': 'Select your personalize',
      'select_your_optimize': 'Select your optimize',
      'select_your_troubleshoot': 'Select your troubleshoot',
      'select_your_diagnose': 'Select your diagnose',
      'select_your_repair': 'Select your repair',
      'select_your_replace': 'Select your replace',
      'select_your_restore': 'Select your restore',
      'select_your_recover': 'Select your recover',
      'select_your_backup': 'Select your backup',
      'select_your_delete': 'Select your delete',
      'select_your_erase': 'Select your erase',
      'select_your_format': 'Select your format',
      'select_your_reset': 'Select your reset',
      'select_your_reboot': 'Select your reboot',
      'select_your_shutdown': 'Select your shutdown',
      'select_your_restart': 'Select your restart',
      'select_your_login': 'Select your login',
      'select_your_logout': 'Select your logout',
      'select_your_register': 'Select your register',
      'select_your_subscribe': 'Select your subscribe',
      'select_your_unsubscribe': 'Select your unsubscribe',
      'select_your_activate': 'Select your activate',
      'select_your_deactivate': 'Select your deactivate',
      'select_your_verify': 'Select your verify',
      'select_your_validate': 'Select your validate',
      'select_your_authenticate': 'Select your authenticate',
      'select_your_authorize': 'Select your authorize',
      'select_your_access': 'Select your access',
      'select_your_deny': 'Select your deny',
      'select_your_block': 'Select your block',
      'select_your_unblock': 'Select your unblock',
      'select_your_filter': 'Select your filter',
      'select_your_sort': 'Select your sort',
      'select_your_group': 'Select your group',
      'select_your_aggregate': 'Select your aggregate',
      'select_your_analyze': 'Select your analyze',
      'select_your_report': 'Select your report',
      'select_your_visualize': 'Select your visualize',
      'select_your_dashboard': 'Select your dashboard',
      'select_your_monitor': 'Select your monitor',
      'select_your_control': 'Select your control',
      'select_your_manage': 'Select your manage',
      'select_your_administer': 'Select your administer',
      'select_your_configure': 'Select your configure',
      'select_your_customize': 'Select your customize',
      'select_your_personalize': 'Select your personalize',
      'select_your_optimize': 'Select your optimize',
      'select_your_troubleshoot': 'Select your troubleshoot',
      'select_your_diagnose': 'Select your diagnose',
      'select_your_repair': 'Select your repair',
      'select_your_replace': 'Select your replace',
      'select_your_restore': 'Select your restore',
      'select_your_recover': 'Select your recover',
      'select_your_backup': 'Select your backup',
      'select_your_delete': 'Select your delete',
      'select_your_erase': 'Select your erase',
      'select_your_format': 'Select your format',
      'select_your_reset': 'Select your reset',
      'select_your_reboot': 'Select your reboot',
      'select_your_shutdown': 'Select your shutdown',
      'select_your_restart': 'Select your restart',
      'select_your_login': 'Select your login',
      'select_your_logout': 'Select your logout',
      'select_your_register': 'Select your register',
      'select_your_subscribe': 'Select your subscribe',
      'select_your_unsubscribe': 'Select your unsubscribe',
      'select_your_activate': 'Select your activate',
      'select_your_deactivate': 'Select your deactivate',
      'select_your_verify': 'Select your verify',
      'select_your_validate': 'Select your validate',
      'select_your_authenticate': 'Select your authenticate',
      'select_your_authorize': 'Select your authorize',
      'select_your_access': 'Select your access',
      'select_your_deny': 'Select your deny',
      'select_your_block': 'Select your block',
      'select_your_unblock': 'Select your unblock',
      'select_your_filter': 'Select your filter',
      'select_your_sort': 'Select your sort',
      'select_your_group': 'Select your group',
      'select_your_aggregate': 'Select your aggregate',
      'select_your_analyze': 'Select your analyze',
      'select_your_report': 'Select your report',
      'select_your_visualize': 'Select your visualize',
      'select_your_dashboard': 'Select your dashboard',
      'select_your_monitor': 'Select your monitor',
      'select_your_control': 'Select your control',
      'select_your_manage': 'Select your manage',
      'select_your_administer': 'Select your administer',
    },
    ar: {
      'welcome_message': 'مرحبا',
      'identify_yourself': 'يرجى تحديد هويتك',
      'current_location_label': 'أنت موجود حاليًا في: {location}',
      'guest_name_label': 'اسم الضيف:',
      'guide_name_label': 'اسم المرشد:',
      'next': 'التالي',
      'back': 'السابق',
      'submit': 'إرسال',
      'cancel': 'إلغاء',
      'confirm': 'تأكيد',
      'loading': 'جار التحميل...',
      'error': 'خطأ',
      'success': 'نجاح',
      'please_wait': 'يرجى الانتظار...',
      'search': 'بحث',
      'no_results_found': 'لم يتم العثور على نتائج.',
      'enter_your_name': 'أدخل اسمك',
      'enter_your_id': 'أدخل رقمك التعريفي',
      'select_your_language': 'اختر لغتك',
      'select_your_location': 'اختر موقعك',
      'select_your_guide': 'اختر مرشدك',
      'select_your_destination': 'اختر وجهتك',
      'select_your_purpose': 'اختر هدفك',
      'select_your_transportation': 'اختر وسيلة النقل الخاصة بك',
      'select_your_room': 'اختر غرفتك',
      'select_your_meal': 'اختر وجبتك',
      'select_your_activity': 'اختر نشاطك',
      'select_your_service': 'اختر خدمتك',
      'select_your_product': 'اختر منتجك',
      'select_your_item': 'اختر بندك',
      'select_your_date': 'اختر تاريخك',
      'select_your_time': 'اختر وقتك',
      'select_your_quantity': 'اختر الكمية الخاصة بك',
      'select_your_size': 'اختر مقاسك',
      'select_your_color': 'اختر لونك',
      'select_your_payment_method': 'اختر طريقة الدفع الخاصة بك',
      'select_your_currency': 'اختر عملتك',
      'select_your_country': 'اختر بلدك',
      'select_your_city': 'اختر مدينتك',
      'select_your_address': 'اختر عنوانك',
      'select_your_phone_number': 'اختر رقم هاتفك',
      'select_your_email': 'اختر بريدك الإلكتروني',
      'select_your_password': 'اختر كلمة مرورك',
      'select_your_confirm_password': 'اختر تأكيد كلمة مرورك',
      'select_your_gender': 'اختر جنسك',
      'select_your_age': 'اختر عمرك',
      'select_your_nationality': 'اختر جنسيتك',
      'select_your_occupation': 'اختر مهنتك',
      'select_your_company': 'اختر شركتك',
      'select_your_department': 'اختر قسمك',
      'select_your_position': 'اختر منصبك',
      'select_your_employee_id': 'اختر رقم تعريف الموظف الخاص بك',
      'select_your_supervisor': 'اختر مشرفك',
      'select_your_project': 'اختر مشروعك',
      'select_your_task': 'اختر مهمتك',
      'select_your_priority': 'اختر أولويتك',
      'select_your_status': 'اختر حالتك',
      'select_your_description': 'اختر وصفك',
      'select_your_attachment': 'اختر مرفقك',
      'select_your_comments': 'اختر تعليقاتك',
      'select_your_signature': 'اختر توقيعك',
      'select_your_terms_and_conditions': 'اختر الشروط والأحكام الخاصة بك',
      'select_your_privacy_policy': 'اختر سياسة الخصوصية الخاصة بك',
      'select_your_cookie_policy': 'اختر سياسة ملفات تعريف الارتباط الخاصة بك',
      'select_your_accessibility_statement': 'اختر بيان إمكانية الوصول الخاص بك',
      'select_your_security_statement': 'اختر بيان الأمان الخاص بك',
      'select_your_disclaimer': 'اختر إخلاء المسؤولية الخاص بك',
      'select_your_copyright': 'اختر حقوق النشر الخاصة بك',
      'select_your_trademark': 'اختر علامتك التجارية',
      'select_your_patent': 'اختر براءة اختراعك',
      'select_your_license': 'اختر ترخيصك',
      'select_your_agreement': 'اختر اتفاقيتك',
      'select_your_contract': 'اختر عقدك',
      'select_your_invoice': 'اختر فاتورتك',
      'select_your_receipt': 'اختر إيصالك',
      'select_your_order': 'اختر طلبك',
      'select_your_shipment': 'اختر شحنتك',
      'select_your_delivery': 'اختر تسليمك',
      'select_your_return': 'اختر عودتك',
      'select_your_refund': 'اختر استرداد أموالك',
      'select_your_exchange': 'اختر تبادلك',
      'select_your_warranty': 'اختر الضمان الخاص بك',
      'select_your_support': 'اختر دعمك',
      'select_your_feedback': 'اختر ملاحظاتك',
      'select_your_review': 'اختر تقييمك',
      'select_your_rating': 'اختر تقييمك',
      'select_your_recommendation': 'اختر توصيتك',
      'select_your_suggestion': 'اختر اقتراحك',
      'select_your_complaint': 'اختر شكواك',
      'select_your_inquiry': 'اختر استفسارك',
      'select_your_question': 'اختر سؤالك',
      'select_your_answer': 'اختر إجابتك',
      'select_your_solution': 'اختر حلك',
      'select_your_resolution': 'اختر قرارك',
      'select_your_update': 'اختر تحديثك',
      'select_your_upgrade': 'اختر ترقيتك',
      'select_your_download': 'اختر تنزيلك',
      'select_your_upload': 'اختر تحميلك',
      'select_your_install': 'اختر تثبيتك',
      'select_your_uninstall': 'اختر إلغاء تثبيتك',
      'select_your_configure': 'اختر تكوينك',
      'select_your_customize': 'اختر تخصيصك',
      'select_your_personalize': 'اختر تخصيصك',
      'select_your_optimize': 'اختر تحسينك',
      'select_your_troubleshoot': 'اختر استكشاف الأخطاء وإصلاحها',
      'select_your_diagnose': 'اختر تشخيصك',
      'select_your_repair': 'اختر إصلاحك',
      'select_your_replace': 'اختر استبدالك',
      'select_your_restore': 'اختر استعادتك',
      'select_your_recover': 'اختر استردادك',
      'select_your_backup': 'اختر نسختك الاحتياطية',
      'select_your_delete': 'اختر حذف',
      'select_your_erase': 'اختر مسح',
      'select_your_format': 'اختر تنسيق',
      'select_your_reset': 'اختر إعادة تعيين',
      'select_your_reboot': 'اختر إعادة التشغيل',
      'select_your_shutdown': 'اختر إيقاف التشغيل',
      'select_your_restart': 'اختر إعادة التشغيل',
      'select_your_login': 'اختر تسجيل الدخول',
      'select_your_logout': 'اختر تسجيل الخروج',
      'select_your_register': 'اختر تسجيل',
      'select_your_subscribe': 'اختر اشتراك',
      'select_your_unsubscribe': 'اختر إلغاء الاشتراك',
      'select_your_activate': 'اختر تفعيل',
      'select_your_deactivate': 'اختر إلغاء التفعيل',
      'select_your_verify': 'اختر تحقق',
      'select_your_validate': 'اختر تحقق من الصحة',
      'select_your_authenticate': 'اختر مصادقة',
      'select_your_authorize': 'اختر تخويل',
      'select_your_access': 'اختر وصول',
      'select_your_deny': 'اختر رفض',
      'select_your_block': 'اختر حظر',
      'select_your_unblock': 'اختر رفع الحظر',
      'select_your_filter': 'اختر تصفية',
      'select_your_sort': 'اختر فرز',
      'select_your_group': 'اختر تجميع',
      'select_your_aggregate': 'اختر تجميع',
      'select_your_analyze': 'اختر تحليل',
      'select_your_report': 'اختر تقرير',
      'select_your_visualize': 'اختر تصور',
      'select_your_dashboard': 'اختر لوحة التحكم',
      'select_your_monitor': 'اختر مراقبة',
      'select_your_control': 'اختر تحكم',
      'select_your_manage': 'اختر إدارة',
      'select_your_administer': 'اختر إدارة',
      'select_your_configure': 'اختر تكوين',
      'select_your_customize': 'اختر تخصيص',
      'select_your_personalize': 'اختر تخصيص',
      'select_your_optimize': 'اختر تحسين',
      'select_your_troubleshoot': 'اختر استكشاف الأخطاء وإصلاحها',
      'select_your_diagnose': 'اختر تشخيص',
      'select_your_repair': 'اختر إصلاح',
      'select_your_replace': 'اختر استبدال',
      'select_your_restore': 'اختر استعادة',
      'select_your_recover': 'اختر استرداد',
      'select_your_backup': 'اختر نسخ احتياطي',
      'select_your_delete': 'اختر حذف',
      'select_your_erase': 'اختر مسح',
      'select_your_format': 'اختر تهيئة',
      'select_your_reset': 'اختر إعادة تعيين',
      'select_your_reboot': 'اختر إعادة تشغيل',
      'select_your_shutdown': 'اختر إيقاف التشغيل',
      'select_your_restart': 'اختر إعادة تشغيل',
      'select_your_login': 'اختر تسجيل الدخول',
      'select_your_logout': 'اختر تسجيل الخروج',
      'select_your_register': 'اختر تسجيل',
      'select_your_subscribe': 'اختر اشتراك',
      'select_your_unsubscribe': 'اختر إلغاء الاشتراك',
      'select_your_activate': 'اختر تفعيل',
      'select_your_deactivate': 'اختر إلغاء التفعيل',
      'select_your_verify': 'اختر تحقق',
      'select_your_validate': 'اختر تحقق من الصحة',
      'select_your_authenticate': 'اختر مصادقة',
      'select_your_authorize': 'اختر تخويل',
      'select_your_access': 'اختر وصول',
      'select_your_deny': 'اختر رفض',
      'select_your_block': 'اختر حظر',
      'select_your_unblock': 'اختر رفع الحظر',
      'select_your_filter': 'اختر تصفية',
      'select_your_sort': 'اختر فرز',
      'select_your_group': 'اختر تجميع',
      'select_your_aggregate': 'اختر تجميع',
      'select_your_analyze': 'اختر تحليل',
      'select_your_report': 'اختر تقرير',
      'select_your_visualize': 'اختر تصور',
      'select_your_dashboard': 'اختر لوحة التحكم',
      'select_your_monitor': 'اختر مراقبة',
      'select_your_control': 'اختر تحكم',
      'select_your_manage': 'اختر إدارة',
      'select_your_administer': 'اختر إدارة',
    }
  };

  // Default language
  let currentLanguage = localStorage.getItem('gis_language') || 'en';
  
  // Apply language direction
  function applyLanguageDirection() {
    if (currentLanguage === 'ar') {
      document.body.classList.add('rtl');
      document.dir = 'rtl';
    } else {
      document.body.classList.remove('rtl');
      document.dir = 'ltr';
    }
  }
  
  // Translate the page
  function translatePage() {
    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[currentLanguage][key]) {
        // Check if there are parameters to replace
        if (element.hasAttribute('data-translate-params')) {
          const paramName = element.getAttribute('data-translate-params');
          const paramValue = document.getElementById(paramName)?.textContent || '';
          element.textContent = translations[currentLanguage][key].replace(`{${paramName}}`, paramValue);
        } else {
          element.textContent = translations[currentLanguage][key];
        }
      }
    });
    
    // Translate attributes with data-translate-attr
    document.querySelectorAll('[data-translate-attr]').forEach(element => {
      const attrInfo = element.getAttribute('data-translate-attr').split(':');
      if (attrInfo.length === 2) {
        const attr = attrInfo[0];
        const key = attrInfo[1];
        if (translations[currentLanguage][key]) {
          element.setAttribute(attr, translations[currentLanguage][key]);
        }
      }
    });
    
    // Update guest name if present
    const guestNameElement = document.querySelector('.guest-name');
    if (guestNameElement) {
      // Mock data - in a real app, this would come from the server
      const guestData = {
        nameEn: 'Mohammed Abdullah Al-Qahtani',
        nameAr: 'محمد عبدالله القحطاني'
      };
      
      guestNameElement.textContent = currentLanguage === 'ar' ? guestData.nameAr : guestData.nameEn;
    }
    
    // Update guide name if present
    const guideNameElement = document.querySelector('.guide-name');
    if (guideNameElement) {
      // Mock data
      const guideData = {
        nameEn: 'Ahmed Hassan',
        nameAr: 'أحمد حسن'
      };
      
      guideNameElement.textContent = currentLanguage === 'ar' ? guideData.nameAr : guideData.nameEn;
    }
    
    // Update current location if present
    const locationElement = document.getElementById('current-location');
    if (locationElement) {
      const locationData = {
        en: 'Mina',
        ar: 'منى'
      };
      
      locationElement.textContent = locationData[currentLanguage];
    }
  }
  
  // Set language and apply changes
  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('gis_language', lang);
    applyLanguageDirection();
    translatePage();
  }
  
  // Initialize language
  function initLanguage() {
    applyLanguageDirection();
    translatePage();
    
    // Add event listeners to language toggle buttons
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
      button.addEventListener('click', function() {
        const lang = this.getAttribute('data-language');
        setLanguage(lang);
        
        // If on welcome page, navigate to identify page
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
          setTimeout(() => {
            window.location.href = 'identify.html';
          }, 300);
        }
      });
    });
    
    // Add event listener to language toggle button
    const languageToggle = document.querySelector('.language-toggle');
    if (languageToggle) {
      languageToggle.addEventListener('click', function() {
        const newLang = currentLanguage === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
      });
    }
  }
  
  // Make functions available globally
  window.GISLanguage = {
    getCurrentLanguage: () => currentLanguage,
    setLanguage,
    translate: (key) => translations[currentLanguage][key] || key,
    translateWithParams: (key, params) => {
      let text = translations[currentLanguage][key] || key;
      for (const [paramName, paramValue] of Object.entries(params)) {
        text = text.replace(`{${paramName}}`, paramValue);
      }
      return text;
    }
  };
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
})();