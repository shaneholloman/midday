export default {
  transaction_methods: {
    card_purchase: "Card Purchase",
    payment: "Payment",
    card_atm: "Card ATM",
    transfer: "Transfer",
    other: "Other",
    ach: "Ach",
    deposit: "Deposit",
    wire: "Wire",
    fee: "Fee",
    interest: "Interest",
  },
  language: {
    title: "Languages",
    description: "Change the language used in the user interface.",
    placeholder: "Select language",
  },
  locale: {
    title: "Locale",
    searchPlaceholder: "Search locale",
    description:
      "Sets the region and language preferences for currency, dates, and other locale-specific formats.",
    placeholder: "Select locale",
  },
  languages: {
    en: "English",
    sv: "Swedish",
  },
  timezone: {
    title: "Time Zone",
    searchPlaceholder: "Search timezone",
    description:
      "Defines the default time zone used for displaying times in the app.",
    placeholder: "Select timezone",
  },
  spending_period: {
    last_30d: "Last 30 days",
    this_month: "This month",
    last_month: "Last month",
    this_year: "This year",
    last_year: "Last year",
  },
  transactions_period: {
    all: "All",
    income: "Income",
    expense: "Expense",
  },
  transaction_frequency: {
    weekly: "Weekly recurring",
    monthly: "Monthly recurring",
    annually: "Annually recurring",
  },
  inbox_filter: {
    all: "All",
    todo: "Todo",
    done: "Done",
  },
  chart_type: {
    profit: "Profit",
    revenue: "Revenue",
    expense: "Expenses",
    burn_rate: "Burn rate",
  },
  folders: {
    all: "All",
    exports: "Exports",
    inbox: "Inbox",
    imports: "Imports",
    transactions: "Transactions",
    invoices: "Invoices",
  },
  mfa_status: {
    verified: "Verified",
    unverified: "Unverified",
  },
  roles: {
    owner: "Owner",
    member: "Member",
  },
  tracker_status: {
    in_progress: "In progress",
    completed: "Completed",
  },
  notifications: {
    inbox: "Receive notifications about new items in your inbox.",
    match: "Receive notifications about matches.",
    transaction: "Receive notifications about a new transaction.",
    transactions: "Receive notifications about new transactions.",
    "invoice.paid": "Receive notifications about paid invoices.",
    "invoice.overdue": "Receive notifications about overdue invoices.",
    "inbox.match": "Receive notifications about new matches in your inbox.",
  },
  widgets: {
    insights: "Assistant",
    inbox: "Inbox",
    spending: "Spending",
    transactions: "Transactions",
    tracker: "Tracker",
  },
  bottom_bar: {
    "transactions#one": "1 Transaction",
    "transactions#other": "{count} Transactions",
    multi_currency: "Multi currency",
    description: "Includes transactions from all pages of results",
  },
  account_type: {
    depository: "Depository",
    credit: "Credit",
    other_asset: "Other Asset",
    loan: "Loan",
    other_liability: "Other Liability",
  },
  tags: {
    bylaws: "Bylaws",
    shareholder_agreements: "Shareholder Agreements",
    board_meeting: "Board Meeting",
    corporate_policies: "Corporate Policies",
    annual_reports: "Annual Reports",
    budget_reports: "Budget Reports",
    audit_reports: "Audit Reports",
    tax_returns: "Tax Returns",
    invoices_and_receipts: "Invoices & Receipts",
    employee_handbook: "Employee Handbook",
    payroll_records: "Payroll Records",
    performance_reviews: "Performance Reviews",
    employee_training_materials: "Employee Training Materials",
    benefits_documentation: "Benefits Documentation",
    termination_letters: "Termination Letters",
    patents: "Patents",
    trademarks: "Trademarks",
    copyrights: "Copyrights",
    client_contracts: "Client Contracts",
    financial_records: "Financial Records",
    compliance_reports: "Compliance Reports",
    regulatory_filings: "Regulatory Filings",
    advertising_copy: "Advertising Copy",
    press_releases: "Press Releases",
    branding_guidelines: "Branding Guidelines",
    market_research_reports: "Market Research Reports",
    campaign_performance_reports: "Campaign Performance Reports",
    customer_surveys: "Customer Surveys",
    quality_control_reports: "Quality Control Reports",
    inventory_reports: "Inventory Reports",
    maintenance_logs: "Maintenance Logs",
    production_schedules: "Production Schedules",
    vendor_agreements: "Vendor Agreements",
    supplier_agreements: "Supplier Agreements",
    sales_contracts: "Sales Contracts",
    sales_reports: "Sales Reports",
    client_proposals: "Client Proposals",
    customer_order_forms: "Customer Order Forms",
    sales_presentations: "Sales Presentations",
    data_security_plans: "Data Security Plans",
    system_architecture_diagrams: "System Architecture Diagrams",
    incident_response_plans: "Incident Response Plans",
    user_manuals: "User Manuals",
    software_licenses: "Software Licenses",
    data_backup_logs: "Data Backup Logs",
    project_plans: "Project Plans",
    task_lists: "Task Lists",
    risk_management_plans: "Risk Management Plans",
    project_status_reports: "Project Status Reports",
    meeting_agendas: "Meeting Agendas",
    lab_notebooks: "Lab Notebooks",
    experiment_results: "Experiment Results",
    product_design_documents: "Product Design Documents",
    prototypes_and_models: "Prototypes & Models",
    testing_reports: "Testing Reports",
    newsletters: "Newsletters",
    email_correspondence: "Email Correspondence",
    support_tickets: "Support Tickets",
    faqs_and_knowledge: "FAQs & Knowledge",
    user_guides: "User Guides",
    warranty_information: "Warranty Information",
    swot_analysis: "SWOT Analysis",
    strategic_objectives: "Strategic Objectives",
    roadmaps: "Roadmaps",
    competitive_analysis: "Competitive Analysis",
    safety_data_sheets: "Safety Data Sheets",
    compliance_certificates: "Compliance Certificates",
    incident_reports: "Incident Reports",
    emergency_response_plans: "Emergency Response Plans",
    certification_records: "Certification Records",
    training_schedules: "Training Schedules",
    e_learning_materials: "E-learning Materials",
    competency_assessment_forms: "Competency Assessment Forms",
  },
  invoice_status: {
    draft: "Draft",
    overdue: "Overdue",
    paid: "Paid",
    unpaid: "Unpaid",
    canceled: "Canceled",
    scheduled: "Scheduled",
  },
  payment_status: {
    none: "Unknown",
    good: "Good",
    average: "Average",
    bad: "Bad",
  },
  payment_status_description: {
    none: "No payment history yet.",
    good: "Consistently pay on time.",
    average: "Mostly on time.",
    bad: "Room for improvement.",
  },
  "invoice_count#zero": "No invoices",
  "invoice_count#one": "1 invoice",
  "invoice_count#other": "{count} invoices",
  account_balance: {
    total_balance: "Total balance",
  },
} as const;
