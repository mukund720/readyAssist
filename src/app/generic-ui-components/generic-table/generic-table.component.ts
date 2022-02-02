import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as globalVariables from "../../common/common_variables";
import { ToastrService } from 'ngx-toastr'; 
import {WebService} from '../../shared/services/web.service';
@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() tableDetails: any;
  commonVariableList:any={"columnList":[],"items":[]}
  company_setup: any = {};
  isProgressing: boolean = true;
  stillLoading:boolean=false;
  @Output()
  sendAction = new EventEmitter()
  constructor(private toaster: ToastrService,public webService:WebService) { }
  ngOnInit() {

    if (this.tableDetails.id) {

      this.commonVariableList.items=[];
      this.GetCompanySetUpData();
    }
  }
  GetCompanySetUpData() {
    let req = {
    }
    this.company_setup = {}
    this.stillLoading=true;
    this.webService.commonPostMethod("Update_company_meta/ajax_getall_bycompany", req).subscribe(
      data => {
        if (data.status) {
          this.company_setup = {}
          this.company_setup = data.response ? data.response : {}
          this.company_setup.generice_ui_paragraph_color_code= this.company_setup.generice_ui_paragraph_color_code? this.company_setup.generice_ui_paragraph_color_code:'#53a75c';
          this.company_setup.generice_ui_heading_color_code= this.company_setup.generice_ui_heading_color_code? this.company_setup.generice_ui_heading_color_code:'#333';

          if (this.company_setup.product_catalog_id != undefined && this.company_setup.product_catalog_id != '') {
            this.company_setup.product_catalog_id = '1'
          }
          this.company_setup.is_invoice_Payments_gst_deduction_visible = this.company_setup.is_invoice_Payments_gst_deduction_visible ? this.company_setup.is_invoice_Payments_gst_deduction_visible : '0';
          this.company_setup.in_invoice_custom_gst_deduction_amount_name = this.company_setup.in_invoice_custom_gst_deduction_amount_name ? this.company_setup.in_invoice_custom_gst_deduction_amount_name : 'GST Deduction';
        
          this.company_setup.is_invoice_Payments_retention_amount = this.company_setup.is_invoice_Payments_retention_amount ? this.company_setup.is_invoice_Payments_retention_amount : '0';
          this.company_setup.is_invoice_Payments_volume_discount = this.company_setup.is_invoice_Payments_volume_discount ? this.company_setup.is_invoice_Payments_volume_discount : '0';
          this.company_setup.is_invoice_Payments_cash_discount = this.company_setup.is_invoice_Payments_cash_discount ? this.company_setup.is_invoice_Payments_cash_discount : '0';
          this.company_setup.is_invoice_Payments_current_payable = this.company_setup.is_invoice_Payments_current_payable ? this.company_setup.is_invoice_Payments_current_payable : '0';
          this.company_setup.is_rejected_qty_visible_in_direct_invoice=  this.company_setup.is_rejected_qty_visible_in_direct_invoice?  this.company_setup.is_rejected_qty_visible_in_direct_invoice:'0'
          this.company_setup.product_catalog_id = this.company_setup.product_catalog_id ? this.company_setup.product_catalog_id : '0';

          this.company_setup.is_pr_unit_price_visible = this.company_setup.is_pr_unit_price_visible ? this.company_setup.is_pr_unit_price_visible : '0'
          this.company_setup.is_current_stock_visible = this.company_setup.is_current_stock_visible ? this.company_setup.is_current_stock_visible : '0'
          this.company_setup.is_average_daily_consumption_visible = this.company_setup.is_average_daily_consumption_visible ? this.company_setup.is_average_daily_consumption_visible : '0'
          this.company_setup.is_inventory_in_hand_visible = this.company_setup.is_inventory_in_hand_visible ? this.company_setup.is_inventory_in_hand_visible : '0'
          this.company_setup.is_lead_time_visible = this.company_setup.is_lead_time_visible ? this.company_setup.is_lead_time_visible : '0'
          this.company_setup.is_procured_days_visible = this.company_setup.is_procured_days_visible ? this.company_setup.is_procured_days_visible : '0'
          this.company_setup.is_moq_visible = this.company_setup.is_moq_visible ? this.company_setup.is_moq_visible : '0'
          this.company_setup.merge_grn_irn = this.company_setup.merge_grn_irn ? this.company_setup.merge_grn_irn : '0';
          this.company_setup.is_product_owned_type_invoice_visible = this.company_setup.is_product_owned_type_invoice_visible ? this.company_setup.is_product_owned_type_invoice_visible : '0';

          this.company_setup.average_consumption_frequency_name = this.company_setup.average_consumption_frequency_name ? this.company_setup.average_consumption_frequency_name : 'Average Monthly Consumption';
          this.company_setup.currency_icon = this.company_setup.currency_icon ? this.company_setup.currency_icon : '';

          //sales Order

          this.company_setup.sales_description_visible = this.company_setup.sales_description_visible ? this.company_setup.sales_description_visible : '0';
          this.company_setup.sales_account_name_visible = this.company_setup.sales_account_name_visible ? this.company_setup.sales_account_name_visible : '0';
          this.company_setup.sales_hsn_code_visible = this.company_setup.sales_hsn_code_visible ? this.company_setup.sales_hsn_code_visible : '0';
          this.company_setup.sales_cgst_visible = this.company_setup.sales_cgst_visible ? this.company_setup.sales_cgst_visible : '0';
          this.company_setup.sales_sgst_visible = this.company_setup.sales_sgst_visible ? this.company_setup.sales_sgst_visible : '0';
          this.company_setup.sales_igst_visible = this.company_setup.sales_igst_visible ? this.company_setup.sales_igst_visible : '0';
          this.company_setup.sales_ugst_visible = this.company_setup.sales_ugst_visible ? this.company_setup.sales_ugst_visible : '0';
          this.company_setup.sales_cess_visible = this.company_setup.sales_cess_visible ? this.company_setup.sales_cess_visible : '0';
          this.company_setup.sales_other_tax_visible = this.company_setup.sales_other_tax_visible ? this.company_setup.sales_other_tax_visible : '0';
          this.company_setup.sales_gst_visible = this.company_setup.sales_gst_visible ? this.company_setup.sales_gst_visible : '0';
          this.company_setup.is_mpr_sku_visible = this.company_setup.is_mpr_sku_visible ? this.company_setup.is_mpr_sku_visible : '0';
          this.company_setup.is_mpr_unit_type_visible = this.company_setup.is_mpr_unit_type_visible ? this.company_setup.is_mpr_unit_type_visible : '0';
          this.company_setup.is_mpr_my_boq_visible = this.company_setup.is_mpr_my_boq_visible ? this.company_setup.is_mpr_my_boq_visible : '0';
          this.company_setup.is_mpr_buffer_stock_visible = this.company_setup.is_mpr_buffer_stock_visible ? this.company_setup.is_mpr_buffer_stock_visible : '0';
          // po
          this.company_setup.is_discount_applicable_in_po = this.company_setup.is_discount_applicable_in_po ? this.company_setup.is_discount_applicable_in_po : '0'
          this.company_setup.discount_type_in_po = this.company_setup.discount_type_in_po ? this.company_setup.discount_type_in_po : ''
          this.company_setup.in_sales_invoice_is_available_stock_visible = this.company_setup.in_sales_invoice_is_available_stock_visible ? this.company_setup.in_sales_invoice_is_available_stock_visible : '0';
          this.company_setup.is_service_start_end_date_visible = this.company_setup.is_service_start_end_date_visible ? this.company_setup.is_service_start_end_date_visible : '0'
          this.company_setup.pr_procured_days_name = this.company_setup.pr_procured_days_name ? this.company_setup.pr_procured_days_name : 'No Of Months Requested For'
          this.company_setup.pr_inventory_in_hand_name = this.company_setup.pr_inventory_in_hand_name ? this.company_setup.pr_inventory_in_hand_name : 'Inventory In Hand(Months)'

          this.company_setup.is_procured_days_po_visible = this.company_setup.is_procured_days_po_visible ? this.company_setup.is_procured_days_po_visible : '0'
          this.company_setup.is_lead_time_po_visible = this.company_setup.is_lead_time_po_visible ? this.company_setup.is_lead_time_po_visible : '0'
          this.company_setup.is_inventory_in_hand_po_visible = this.company_setup.is_inventory_in_hand_po_visible ? this.company_setup.is_inventory_in_hand_po_visible : '0'
          this.company_setup.is_average_daily_consumption_po_visible = this.company_setup.is_average_daily_consumption_po_visible ? this.company_setup.is_average_daily_consumption_po_visible : '0'
          this.company_setup.is_current_stock_po_visible = this.company_setup.is_current_stock_po_visible ? this.company_setup.is_current_stock_po_visible : '0'

        }
        else {
          this.toaster.error("Error", data.message);
        }
        this.stillLoading=false;
        this.apiCall();
      }, error => {
        this.stillLoading=false;
        this.toaster.error("Error", "Something Went Wrong");

      }
    )
  }
  apiCall() {

    switch (this.tableDetails.id) {
      case 'invoice_android_report':
        this.commonVariableList.columnList = [];
        this.commonVariableList.items = [];

        break;
      case 'invoicereport':
        this.commonVariableList.columnList = globalVariables.invoiceVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.invoice_items ? this.tableDetails.data.invoice_items : [];
        if (this.commonVariableList.items) {
          for (let i of this.commonVariableList.items) {

            i.po_qty = this.webService.convertNaN(i.po_qty)
            i.po_qty = parseFloat(i.po_qty)
            i.po_qty = this.webService.convertNaN(i.po_qty)


            i.total_required_qty = this.webService.convertNaN(i.total_required_qty)
            i.total_required_qty = parseFloat(i.total_required_qty)
            i.total_required_qty = this.webService.convertNaN(i.total_required_qty)



            i.rejected_qty = this.webService.convertNaN(i.rejected_qty)
            i.rejected_qty = parseFloat(i.rejected_qty)
            i.rejected_qty = this.webService.convertNaN(i.rejected_qty)


            
            i.po_unit_price = this.webService.convertNaN(i.po_unit_price)
            i.po_unit_price = parseFloat(i.po_unit_price)
            i.po_unit_price = this.webService.convertNaN(i.po_unit_price)


            i.invoice_unit_price = this.webService.convertNaN(i.invoice_unit_price)
            i.invoice_unit_price = parseFloat(i.invoice_unit_price)
            i.invoice_unit_price = this.webService.convertNaN(i.invoice_unit_price)

            i.invoice_qty = this.webService.convertNaN(i.invoice_qty)
            i.invoice_qty = parseFloat(i.invoice_qty)
            i.invoice_qty = this.webService.convertNaN(i.invoice_qty)

            i.accepted_qty = this.webService.convertNaN(i.accepted_qty)
            i.accepted_qty = parseFloat(i.accepted_qty)
            i.accepted_qty = this.webService.convertNaN(i.accepted_qty)

            i.product_unit_price = this.webService.convertNaN(i.product_unit_price)
            i.product_unit_price = parseFloat(i.product_unit_price)
            i.product_unit_price = this.webService.convertNaN(i.product_unit_price)


            i.hsn_other_tax = i.hsn_other_tax ? i.hsn_other_tax : '0'
            i.hsn_ugst = i.hsn_ugst ? i.hsn_ugst : '0'
            i.hsn_cgst = i.hsn_cgst ? i.hsn_cgst : '0'
            i.hsn_sgst = i.hsn_sgst ? i.hsn_sgst : '0'
            i.hsn_igst = i.hsn_igst ? i.hsn_igst : '0'

            // paid 
            i.paid_cess = this.webService.convertNaN(i.paid_cess)
            i.paid_other_tax = this.webService.convertNaN(i.paid_other_tax)
            i.paid_ugst = this.webService.convertNaN(i.paid_ugst)
            i.paid_cgst = this.webService.convertNaN(i.paid_cgst)
            i.paid_sgst = this.webService.convertNaN(i.paid_sgst)
            i.paid_igst = this.webService.convertNaN(i.paid_igst)

            // invoice
            i.invoice_cess = this.webService.convertNaN(i.invoice_cess)
            i.invoice_other_tax = this.webService.convertNaN(i.invoice_other_tax)
            i.invoice_ugst = this.webService.convertNaN(i.invoice_ugst)
            i.invoice_cgst = this.webService.convertNaN(i.invoice_cgst)
            i.invoice_sgst = this.webService.convertNaN(i.invoice_sgst)
            i.invoice_igst = this.webService.convertNaN(i.invoice_igst)


//Start :  new code written to first convert values into number  and then convert more than two digit decimal into two
  // paid 
  i.paid_cess = parseFloat(i.paid_cess)
  i.paid_other_tax = parseFloat(i.paid_other_tax)
  i.paid_ugst = parseFloat(i.paid_ugst)
  i.paid_cgst = parseFloat(i.paid_cgst)
  i.paid_sgst = parseFloat(i.paid_sgst)
  i.paid_igst = parseFloat(i.paid_igst)

  // invoice
  i.invoice_cess = parseFloat(i.invoice_cess)
  i.invoice_other_tax = parseFloat(i.invoice_other_tax)
  i.invoice_ugst = parseFloat(i.invoice_ugst)
  i.invoice_cgst = parseFloat(i.invoice_cgst)
  i.invoice_sgst = parseFloat(i.invoice_sgst)
  i.invoice_igst = parseFloat(i.invoice_igst)



              // paid 
              i.paid_cess = this.webService.convertNaN(i.paid_cess)
              i.paid_other_tax = this.webService.convertNaN(i.paid_other_tax)
              i.paid_ugst = this.webService.convertNaN(i.paid_ugst)
              i.paid_cgst = this.webService.convertNaN(i.paid_cgst)
              i.paid_sgst = this.webService.convertNaN(i.paid_sgst)
              i.paid_igst = this.webService.convertNaN(i.paid_igst)
  
              // invoice
              i.invoice_cess = this.webService.convertNaN(i.invoice_cess)
              i.invoice_other_tax = this.webService.convertNaN(i.invoice_other_tax)
              i.invoice_ugst = this.webService.convertNaN(i.invoice_ugst)
              i.invoice_cgst = this.webService.convertNaN(i.invoice_cgst)
              i.invoice_sgst = this.webService.convertNaN(i.invoice_sgst)
              i.invoice_igst = this.webService.convertNaN(i.invoice_igst)


 //Close :  new code written to first convert values into number  and then convert more than two digit decimal into two





            // paid
            i.hsn_cess = parseFloat(i.paid_cess) <= 0 ? '0' : i.hsn_cess;
            i.hsn_other_tax = parseFloat(i.paid_other_tax) <= 0 ? '0' : i.hsn_other_tax;
            i.hsn_ugst = parseFloat(i.paid_ugst) <= 0 ? '0' : i.hsn_ugst;
            i.hsn_cgst = parseFloat(i.paid_cgst) <= 0 ? '0' : i.hsn_cgst;
            i.hsn_sgst = parseFloat(i.paid_sgst) <= 0 ? '0' : i.hsn_sgst;
            i.hsn_igst = parseFloat(i.paid_igst) <= 0 ? '0' : i.hsn_igst;

            // invoice
            i.hsn_cess = parseFloat(i.invoice_cess) <= 0 ? '0' : i.hsn_cess;
            i.hsn_other_tax = parseFloat(i.invoice_other_tax) <= 0 ? '0' : i.hsn_other_tax;
            i.hsn_ugst = parseFloat(i.invoice_ugst) <= 0 ? '0' : i.hsn_ugst;
            i.hsn_cgst = parseFloat(i.invoice_cgst) <= 0 ? '0' : i.hsn_cgst;
            i.hsn_sgst = parseFloat(i.invoice_sgst) <= 0 ? '0' : i.hsn_sgst;
            i.hsn_igst = parseFloat(i.invoice_igst) <= 0 ? '0' : i.hsn_igst;

            i.rejected_qty = this.webService.convertNaN(i.rejected_qty)
            i.rejected_qty = parseFloat(i.rejected_qty)

            i.rejected_qty = this.webService.convertNaN(i.rejected_qty)
          }
        }

        let is_direct: any = '0';
        is_direct = this.tableDetails.data.is_direct ? this.tableDetails.data.is_direct : '0'
        if (this.commonVariableList.columnList) {

          for (let i of this.commonVariableList.columnList) {
            this.tableDetails.data.is_custom_ship_to_location=this.tableDetails.data.is_custom_ship_to_location?this.tableDetails.data.is_custom_ship_to_location:'0';
            this.tableDetails.data.custom_ship_to_location=this.tableDetails.data.custom_ship_to_location?this.tableDetails.data.custom_ship_to_location:'';
  if(i.value == 'location' && this.tableDetails.data.is_custom_ship_to_location=='1')
  {
    i.is_view=false;
  }
  if(i.value == 'location' && this.tableDetails.data.is_custom_ship_to_location=='0')
  {
    i.is_view=false;
  }
       

            if (i.value == 'conversion_unit_price' && this.tableDetails.data.is_different_document_currency == '0') {
              i.display = "FC (PO) Unit Price"
              i.is_view = false;
            }
            if (i.value == 'conversion_unit_price' && this.tableDetails.data.is_different_document_currency == '1') {
              i.display = "FC (PO) Unit Price" + "(" + this.tableDetails.data.currency_code + ")";
              i.is_view = true;
            }

            if (i.value == 'conversion_paid_price' && this.tableDetails.data.is_different_document_currency == '0') {
              i.display = "FC Paid Price Per Unit"
              i.is_view = false;
            }
            if (i.value == 'conversion_paid_price' && this.tableDetails.data.is_different_document_currency == '1') {
              i.display = "FC Paid Price Per Unit" + "(" + this.tableDetails.data.currency_code + ")";
              i.is_view = true;
            }

            if (i.value == 'conversion_invoice_price' && this.tableDetails.data.is_different_document_currency == '0') {
              i.display = "FC Invoice Unit Price"
              i.is_view = false;
            }
            if (i.value == 'conversion_invoice_price' && this.tableDetails.data.is_different_document_currency == '1') {
              i.display = "FC Invoice Unit Price" + "(" + this.tableDetails.data.currency_code + ")";
              i.is_view = true;
            }

            if (i.value == 'total_required_qty' && this.tableDetails.data.is_direct == '1') {
              i.is_view = false;
            }
            if (i.value == 'total_required_qty' && this.tableDetails.data.is_direct == '0') {
              i.is_view = true;
            }


            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '1') {
              i.is_view = true;
            }
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '0') {
              i.is_view = false;
            }

            if (i.value == 'rejected_qty' && is_direct == '0') {
              i.is_view = true;
            }
            if (i.value == 'rejected_qty' && is_direct == '1') {
              
              if (this.company_setup.is_rejected_qty_visible_in_direct_invoice=='1') {
                i.is_view = true;
              }
              if (this.company_setup.is_rejected_qty_visible_in_direct_invoice=='0') {
                i.is_view = false;
              }
            }

            if (i.value == 'total_required_qty' && is_direct == '0') {
              i.is_view = true;
            }
            if (i.value == 'total_required_qty' && is_direct == '1') {
              i.is_view = false;
            }

          }
        }
        this.makeData();


        break;
      case 'grnreport':
        this.commonVariableList.columnList = globalVariables.grnVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.grn_items ? this.tableDetails.data.grn_items : [];
        this.company_setup.grn_unit_type_visible = this.company_setup.grn_unit_type_visible ? this.company_setup.grn_unit_type_visible : '0';

        this.company_setup.grn_action_visible = this.company_setup.grn_action_visible ? this.company_setup.grn_action_visible : '0';
        this.company_setup.grn_subcategory_visible = this.company_setup.grn_subcategory_visible ? this.company_setup.grn_subcategory_visible : '0';
        this.company_setup.grn_category_visible = this.company_setup.grn_category_visible ? this.company_setup.grn_category_visible : '0';
        this.company_setup.grn_catalog_visible = this.company_setup.grn_catalog_visible ? this.company_setup.grn_catalog_visible : '0';
        this.company_setup.grn_requested_by_visible = this.company_setup.grn_requested_by_visible ? this.company_setup.grn_requested_by_visible : '0';

        if (this.commonVariableList.items) {
          for (let i of this.commonVariableList.items) {

            i.accepted_qty = this.webService.convertNaN(i.accepted_qty)
            i.accepted_qty = parseFloat(i.accepted_qty)
            i.accepted_qty = this.webService.convertNaN(i.accepted_qty)


            i.rejected_qty = this.webService.convertNaN(i.rejected_qty)
            i.rejected_qty =parseFloat(i.rejected_qty)
            i.rejected_qty = this.webService.convertNaN(i.rejected_qty)


            i.qty = this.webService.convertNaN(i.qty)
            i.qty = parseFloat(i.qty)
            i.qty = this.webService.convertNaN(i.qty)


            i.total_required_qty = this.webService.convertNaN(i.total_required_qty)
            i.total_required_qty = parseFloat(i.total_required_qty)
            i.total_required_qty = this.webService.convertNaN(i.total_required_qty)


            i.received_qty = this.webService.convertNaN(i.received_qty)
            i.received_qty = parseFloat(i.received_qty)
            i.received_qty = this.webService.convertNaN(i.received_qty)


            i.current_required_qty = this.webService.convertNaN(i.current_required_qty)
            i.current_required_qty = parseFloat(i.current_required_qty)
            i.current_required_qty = this.webService.convertNaN(i.current_required_qty)


            i.product_owned_type_name = '';

            switch (i.product_owned_type) {
              case '1':
                i.product_owned_type_name = 'New Owned';
                break;
              case '2':
                i.product_owned_type_name = 'New Leased';
                break;
              case '3':
                i.product_owned_type_name = 'Old Owned';
                break;
              case '4':
                i.product_owned_type_name = 'Old Leased';
                break;
              case '5':
                i.product_owned_type_name = 'Consignement';
                break;
              case '6':
                i.product_owned_type_name = 'Damaged but Usable';
                break;
              case '7':
                i.product_owned_type_name = 'Damaged and Not Usable';
                break;
              default:
                i.product_owned_type_name = '';
            }

            i.grn_checked_type_name = '';

            switch (i.grn_checked_type) {
              case '1':
                i.grn_checked_type_name = 'Sample Checked';
                break;
              case '2':
                i.grn_checked_type_name = 'Entire Quantity Checked';
                break;
              case '3':
                i.grn_checked_type_name = 'None';
                break;
              default:
                i.grn_checked_type_name = '';
            }
          }
        }

        this.company_setup.barcode_code = this.company_setup.barcode_code ? this.company_setup.barcode_code : '0'
        this.company_setup.qr_code = this.company_setup.qr_code ? this.company_setup.qr_code : '0'
        this.company_setup.send_damage_mail = this.company_setup.send_damage_mail ? this.company_setup.send_damage_mail : '0';
        this.company_setup.grn_checked_type = this.company_setup.grn_checked_type ? this.company_setup.grn_checked_type : '0';
        this.company_setup.grn_sample_size = this.company_setup.grn_sample_size ? this.company_setup.grn_sample_size : '0';
        this.company_setup.grn_error_size = this.company_setup.grn_error_size ? this.company_setup.grn_error_size : '0';
        this.company_setup.grn_is_closed = this.company_setup.grn_is_closed ? this.company_setup.grn_is_closed : '0';
        this.company_setup.grn_product_owned_type = this.company_setup.grn_product_owned_type ? this.company_setup.grn_product_owned_type : '0';
        this.company_setup.is_damaged_qty_visible = this.company_setup.is_damaged_qty_visible ? this.company_setup.is_damaged_qty_visible : '0';
        this.company_setup.is_damaged_remarks_visible = this.company_setup.is_damaged_remarks_visible ? this.company_setup.is_damaged_remarks_visible : '0';

        let is_closed: boolean = true;
        let send_damage_mail: boolean = true;
        let is_rack_dimension: boolean = false;
        is_closed = this.commonVariableList.items.some((v) => {
          return v.is_closed
        })
        send_damage_mail = this.commonVariableList.items.some((v) => {
          return v.send_damage_mail
        })
        is_rack_dimension = this.commonVariableList.items.some((v) => {
          return v.rack_dimension_name != '' && v.rack_dimension_name != undefined && v.rack_dimension_name != null
        })

        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {

            if (i.value == 'category_name' && this.company_setup.grn_category_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'category_name' && this.company_setup.grn_category_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'subcategory_name' && this.company_setup.grn_subcategory_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'subcategory_name' && this.company_setup.grn_subcategory_visible == '0') {
              i.is_view = false;
            }


            if (i.value == 'unit_type_name' && this.company_setup.grn_unit_type_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'unit_type_name' && this.company_setup.grn_unit_type_visible == '0') {
              i.is_view = false;
            }


            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '1' && this.company_setup.grn_catalog_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '0' && this.company_setup.grn_catalog_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'rack_dimension_name' && is_rack_dimension) {
              i.is_view = true;
            }
            if (i.value == 'rack_dimension_name' && !is_rack_dimension) {
              i.is_view = false;
            }
            if (i.value == 'grn_checked_type_name' && this.company_setup.grn_checked_type == '0') {
              i.is_view = false;
            }
            if (i.value == 'sample_size' && this.company_setup.grn_sample_size == '0') {
              i.is_view = false;
            }

            if (i.value == 'error_size' && this.company_setup.grn_error_size == '0') {
              i.is_view = false;
            }

            if (i.value == 'product_owned_type_name' && this.company_setup.grn_product_owned_type == '0') {
              i.is_view = false;
            }

            if (i.value == 'damaged_qty' && this.company_setup.is_damaged_remarks_visible == '1') {
              i.is_view = true;
            }

            if (i.value == 'damaged_remarks' && this.company_setup.is_damaged_qty_visible == '1') {
              i.is_view = true;
            }

            if (i.value == 'is_closed' && is_closed) {
              i.is_view = true;
            }
            if (i.value == 'send_damage_mail' && send_damage_mail) {
              i.is_view = true;
            }
            if (i.value == 'qrcode_file_url' && this.company_setup.qr_code == '0') {
              i.is_view = false;
            }
            if (i.value == 'barcode_file_url' && this.company_setup.barcode_code == '0') {
              i.is_view = false;
            }


          }
        }

        this.makeData();

        break;
      case 'irnreport':
        this.commonVariableList.columnList = globalVariables.irnVariableList.columnList
        this.commonVariableList.items = this.tableDetails.data.irn_items ? this.tableDetails.data.irn_items : [];
        let is_damaged: boolean = true;
        this.company_setup.irn_unit_type_visible = this.company_setup.irn_unit_type_visible ? this.company_setup.irn_unit_type_visible : '0';
        this.company_setup.irn_add_button_custom_name = this.company_setup.irn_add_button_custom_name ? this.company_setup.irn_add_button_custom_name : 'Add IRN'
        this.company_setup.irn_date_custom_name = this.company_setup.irn_date_custom_name ? this.company_setup.irn_date_custom_name : 'IRN Date'
        this.company_setup.irn_no_custom_name = this.company_setup.irn_no_custom_name ? this.company_setup.irn_no_custom_name : 'IRN No'

        this.company_setup.irn_action_visible = this.company_setup.irn_action_visible ? this.company_setup.irn_action_visible : '0';
        this.company_setup.irn_damaged_visible = this.company_setup.irn_damaged_visible ? this.company_setup.irn_damaged_visible : '0';
        this.company_setup.irn_subcategory_visible = this.company_setup.irn_subcategory_visible ? this.company_setup.irn_subcategory_visible : '0';
        this.company_setup.irn_category_visible = this.company_setup.irn_category_visible ? this.company_setup.irn_category_visible : '0';
        this.company_setup.irn_catalog_visible = this.company_setup.irn_catalog_visible ? this.company_setup.irn_catalog_visible : '0';
        this.company_setup.irn_requested_by_visible = this.company_setup.irn_requested_by_visible ? this.company_setup.irn_requested_by_visible : '0';

        is_damaged = this.commonVariableList.items.some((v) => { return v.is_damaged })

        if (this.commonVariableList.items) {
          for (let i of this.commonVariableList.items) {

            i.qty=this.webService.convertNaN(i.qty)
            i.qty=parseFloat(i.qty)
            i.qty=this.webService.convertNaN(i.qty)

            i.total_required_qty=this.webService.convertNaN(i.total_required_qty)
            i.total_required_qty=parseFloat(i.total_required_qty)
            i.total_required_qty=this.webService.convertNaN(i.total_required_qty)

            i.current_required_qty=this.webService.convertNaN(i.current_required_qty)
            i.current_required_qty=parseFloat(i.current_required_qty)
            i.current_required_qty=this.webService.convertNaN(i.current_required_qty)

            i.received_qty=this.webService.convertNaN(i.received_qty)
            i.received_qty=parseFloat(i.received_qty)
            i.received_qty=this.webService.convertNaN(i.received_qty)

            i.accepted_qty=this.webService.convertNaN(i.accepted_qty)
            i.accepted_qty=parseFloat(i.accepted_qty)
            i.accepted_qty=this.webService.convertNaN(i.accepted_qty)


            i.rejected_qty=this.webService.convertNaN(i.rejected_qty)
            i.rejected_qty=parseFloat(i.rejected_qty)
            i.rejected_qty=this.webService.convertNaN(i.rejected_qty)



          }
        }
        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {

            if (i.value == 'irn_no') {
              i.display = this.company_setup.irn_no_custom_name;
            }
            if (i.value == 'irn_date') {
              i.display = this.company_setup.irn_date_custom_name;
            }
            if (i.value == 'category_name' && this.company_setup.irn_category_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'category_name' && this.company_setup.irn_category_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'subcategory_name' && this.company_setup.irn_subcategory_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'subcategory_name' && this.company_setup.irn_subcategory_visible == '0') {
              i.is_view = false;
            }


            if (i.value == 'unit_type_name' && this.company_setup.irn_unit_type_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'unit_type_name' && this.company_setup.irn_unit_type_visible == '0') {
              i.is_view = false;
            }


            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '1' && this.company_setup.irn_catalog_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '0' && this.company_setup.irn_catalog_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'accepted_qty' && this.company_setup.merge_grn_irn == '1') {
              i.is_view = true;
            }
            if (i.value == 'accepted_qty' && this.company_setup.merge_grn_irn == '0') {
              i.is_view = false;
            }

            if (i.value == 'rejected_qty' && this.company_setup.merge_grn_irn == '1') {
              i.is_view = true;
            }
            if (i.value == 'rejected_qty' && this.company_setup.merge_grn_irn == '0') {
              i.is_view = false;
            }

            if (i.value == 'rejected_reason' && this.company_setup.merge_grn_irn == '1') {
              i.is_view = true;
            }
            if (i.value == 'rejected_reason' && this.company_setup.merge_grn_irn == '0') {
              i.is_view = false;
            }
            if (i.value == 'is_damaged' && !is_damaged && this.company_setup.irn_damaged_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'is_damaged' && is_damaged && this.company_setup.irn_damaged_visible == '1') {
              i.is_view = true;
            }



          }
        }
        this.makeData();

        break;
      case 'poreport':
        let url:any='/'+window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        console.log(this.webService.getMenuByUrl(url));
        let is_new_item_visible:boolean=this.webService.getMenuByUrl(url).id=="38"?false:true;
        console.log('is po='+is_new_item_visible);
        let is_amend_visible:boolean=false;

        this.commonVariableList.columnList = globalVariables.poVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.po_items ? this.tableDetails.data.po_items : [];
        this.company_setup.is_catalog_id_visible = false;
        this.company_setup.po_item_columnList = this.company_setup.po_item_columnList ? this.company_setup.po_item_columnList : []
        if (this.company_setup.po_item_columnList.length > 0) {
          this.company_setup.is_catalog_id_visible = this.company_setup.po_item_columnList.some((v) => { return v.id == 'catalog_id' && v.isVisible })
        }
        if(!is_new_item_visible)
        {
          this.commonVariableList.items=this.commonVariableList.items.filter((v)=>{return v.is_direct=='0'});
        }
        if (this.commonVariableList.items) {
          for (let d of this.commonVariableList.items) {
            this.tableDetails.data.is_custom_ship_to_location=this.tableDetails.data.is_custom_ship_to_location?this.tableDetails.data.is_custom_ship_to_location:'0';
            this.tableDetails.data.custom_ship_to_location=this.tableDetails.data.custom_ship_to_location?this.tableDetails.data.custom_ship_to_location:'';
  if(this.tableDetails.data.is_custom_ship_to_location=='1')
  {
    d.ship_to_location=this.tableDetails.data.custom_ship_to_location;
  }
 

            if(d.is_direct=='0')
            {
              d.revised_po_date='';
            }
            if(!is_new_item_visible && d.is_direct=='0')
            {
              d.is_highlighted_row=false;
            }
            if(is_new_item_visible && d.is_direct=='1')
            {
              d.is_highlighted_row=true;
            }
            d.product_qty = this.webService.convertNaN(d.product_qty) ? this.webService.convertNaN(d.product_qty) : '0';
            d.unit_price = this.webService.convertNaN(d.unit_price) ? this.webService.convertNaN(d.unit_price) : '0';

            d.lead_time = this.webService.convertNaN(d.lead_time) ? this.webService.convertNaN(d.lead_time) : '0';
            d.current_stock = this.webService.convertNaN(d.current_stock) ? this.webService.convertNaN(d.current_stock) : '0';
            d.average_daily_consumption = this.webService.convertNaN(d.average_daily_consumption) ? this.webService.convertNaN(d.average_daily_consumption) : '0';
            d.inventory_in_hand = this.webService.convertNaN(d.inventory_in_hand) ? this.webService.convertNaN(d.inventory_in_hand) : '0';
            d.procured_days = this.webService.convertNaN(d.procured_days) ? this.webService.convertNaN(d.procured_days) : '0';
            d.moq = this.webService.convertNaN(d.moq) ? this.webService.convertNaN(d.moq) : '0';
            d.item_qty = this.webService.convertNaN(d.item_qty) ? this.webService.convertNaN(d.item_qty) : '0';
           
            d.unit_price = parseFloat(d.unit_price) ? parseFloat(d.unit_price) : '0';
            d.product_qty = parseFloat(d.product_qty) ? parseFloat(d.product_qty) : '0';

            d.lead_time = parseFloat(d.lead_time) ? parseFloat(d.lead_time) : '0';
            d.current_stock = parseFloat(d.current_stock) ? parseFloat(d.current_stock) : '0';
            d.average_daily_consumption = parseFloat(d.average_daily_consumption) ? parseFloat(d.average_daily_consumption) : '0';
            d.inventory_in_hand = parseFloat(d.inventory_in_hand) ? parseFloat(d.inventory_in_hand) : '0';
            d.procured_days = parseFloat(d.procured_days) ? parseFloat(d.procured_days) : '0';
            d.moq = parseFloat(d.moq) ? parseFloat(d.moq) : '0';
            d.item_qty = parseFloat(d.item_qty) ? parseFloat(d.item_qty) : '0';
      
      
            d.unit_price = this.webService.convertNaN(d.unit_price) ? this.webService.convertNaN(d.unit_price) : '0';
            d.product_qty = this.webService.convertNaN(d.product_qty) ? this.webService.convertNaN(d.product_qty) : '0';

            d.lead_time = this.webService.convertNaN(d.lead_time) ? this.webService.convertNaN(d.lead_time) : '0';
            d.current_stock = this.webService.convertNaN(d.current_stock) ? this.webService.convertNaN(d.current_stock) : '0';
            d.average_daily_consumption = this.webService.convertNaN(d.average_daily_consumption) ? this.webService.convertNaN(d.average_daily_consumption) : '0';
            d.inventory_in_hand = this.webService.convertNaN(d.inventory_in_hand) ? this.webService.convertNaN(d.inventory_in_hand) : '0';
            d.procured_days = this.webService.convertNaN(d.procured_days) ? this.webService.convertNaN(d.procured_days) : '0';
            d.moq = this.webService.convertNaN(d.moq) ? this.webService.convertNaN(d.moq) : '0';
            d.item_qty = this.webService.convertNaN(d.item_qty) ? this.webService.convertNaN(d.item_qty) : '0';
  
            d.product_qty=this.webService.convertNaN(d.product_qty)
            d.product_qty=parseFloat(d.product_qty)
            d.product_qty=this.webService.convertNaN(d.product_qty)

            d.product_unit_price=this.webService.convertNaN(d.product_unit_price)
            d.product_unit_price=parseFloat(d.product_unit_price)
            d.product_unit_price=this.webService.convertNaN(d.product_unit_price)



           

            d.hsn_other_tax = d.hsn_other_tax ? d.hsn_other_tax : '0'
            d.hsn_ugst = d.hsn_ugst ? d.hsn_ugst : '0'
            d.hsn_cgst = d.hsn_cgst ? d.hsn_cgst : '0'
            d.hsn_sgst = d.hsn_sgst ? d.hsn_sgst : '0'
            d.hsn_igst = d.hsn_igst ? d.hsn_igst : '0'

            d.cess = this.webService.convertNaN(d.cess)
            d.other_tax = this.webService.convertNaN(d.other_tax)
            d.ugst = this.webService.convertNaN(d.ugst)
            d.cgst = this.webService.convertNaN(d.cgst)
            d.sgst = this.webService.convertNaN(d.sgst)
            d.igst = this.webService.convertNaN(d.igst)

            d.cess = parseFloat(d.cess)
            d.other_tax = parseFloat(d.other_tax)
            d.ugst = parseFloat(d.ugst)
            d.cgst = parseFloat(d.cgst)
            d.sgst = parseFloat(d.sgst)
            d.igst = parseFloat(d.igst)


            d.cgst=this.webService.convertNaN(d.cgst)
            d.sgst=this.webService.convertNaN(d.sgst)
            d.igst=this.webService.convertNaN(d.igst)
            d.ugst=this.webService.convertNaN(d.ugst)
            d.cess=this.webService.convertNaN(d.cess)
            d.other_tax=this.webService.convertNaN(d.other_tax)


            d.hsn_cess = parseFloat(d.cess) <= 0 ? '' : d.hsn_cess;
            d.hsn_other_tax = parseFloat(d.other_tax) <= 0 ? '' : d.hsn_other_tax;
            d.hsn_ugst = parseFloat(d.ugst) <= 0 ? '' : d.hsn_ugst;
            d.hsn_cgst = parseFloat(d.cgst) <= 0 ? '' : d.hsn_cgst;
            d.hsn_sgst = parseFloat(d.sgst) <= 0 ? '' : d.hsn_sgst;
            d.hsn_igst = parseFloat(d.igst) <= 0 ? '' : d.hsn_igst;
            d.service_end_date = this.webService.makeWrongDateEmpty(d.service_end_date)
            d.service_start_date = this.webService.makeWrongDateEmpty(d.service_start_date)
            d.product_required_by = this.webService.makeWrongDateEmpty(d.product_required_by)

          }
        }
        console.log(this.company_setup.is_catalog_id_visible);
        let is_not_service: boolean = true;
        let is_goods: boolean = true;
        let is_logistic: boolean = true;
        let is_all_service: boolean = true;
        let is_not_discount: boolean = false;
        is_amend_visible=this.commonVariableList.items.some((v) => {
          return v.amend_po_status !='' && v.amend_po_status !=undefined
        })
        is_not_discount = this.commonVariableList.items.every((v) => {
          return v.discount_unit_price == '0'
        })

        is_logistic = this.commonVariableList.items.some((v) => {
          return v.is_logistic
        })
        is_goods = this.commonVariableList.items.every((v) => {
          return v.product_type == 'goods'
        })

        is_not_service = this.commonVariableList.items.every((v) => {
          return v.service_start_date == '' && v.service_end_date == ''
        })
        is_all_service = this.commonVariableList.items.every((v) => {
          return v.product_type == 'services'
        })


        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {
            if(i.display == 'CGST'){
              i.display = this.company_setup.custom_cgst_name?this.company_setup.custom_cgst_name: "CGST";
            }
            if(i.display == 'SGST'){ 
              i.display = this.company_setup.custom_sgst_name?this.company_setup.custom_sgst_name: "SGST";
            }
            if(i.display == 'IGST'){
              i.display = this.company_setup.custom_igst_name?this.company_setup.custom_igst_name: "IGST";
            }
            if(i.display == 'UGST'){
              i.display = this.company_setup.custom_ugst_name?this.company_setup.custom_ugst_name: "UGST";
            }
            if(i.display == 'CESS'){
              i.display = this.company_setup.custom_cess_name?this.company_setup.custom_cess_name: "CESS";
            }
            if(i.display == 'Other Tax'){
              i.display = this.company_setup.custom_other_tax_name?this.company_setup.custom_other_tax_name: "Other Tax";
            }
       
          
         
            this.tableDetails.data.is_custom_ship_to_location=this.tableDetails.data.is_custom_ship_to_location?this.tableDetails.data.is_custom_ship_to_location:'0';
            this.tableDetails.data.custom_ship_to_location=this.tableDetails.data.custom_ship_to_location?this.tableDetails.data.custom_ship_to_location:'';
  if(i.value == 'ship_to_location' && this.tableDetails.data.is_custom_ship_to_location=='1')
  {
    i.is_html=true;
  }
  if(i.value == 'ship_to_location' && this.tableDetails.data.is_custom_ship_to_location=='0')
  {
    i.is_html=false;
  }
            if(i.value == 'revised_po_date' &&!is_new_item_visible)
            {
              i.is_view=false
            }
            if(i.value == 'revised_po_date' &&is_new_item_visible)
            {
              i.is_view=true;
            }

              // amend po start

              if (i.value == 'amend_po_status' && is_amend_visible) {
                i.is_view = true;
              }
              if (i.value == 'amend_po_status' && !is_amend_visible) {
                i.is_view = false;
              }
  
              if (i.value == 'amend_po_qty' && is_amend_visible) {
                i.is_view = true;
              }
              if (i.value == 'amend_po_qty' && !is_amend_visible) {
                i.is_view = false;
              }
  
  
              if (i.value == 'amend_date' && is_amend_visible) {
                i.is_view = true;
              }
              if (i.value == 'amend_date' && !is_amend_visible) {
                i.is_view = false;
              }
  
              if (i.value == 'amend_added_by' && is_amend_visible) {
                i.is_view = true;
              }
              if (i.value == 'amend_added_by' && !is_amend_visible) {
                i.is_view = false;
              }
              // amend po closed

            if (i.value == 'average_daily_consumption') {
              i.display = this.company_setup.average_consumption_frequency_name;
            }
           
            if (i.value == 'current_stock' && this.company_setup.is_current_stock_po_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'current_stock' && this.company_setup.is_current_stock_po_visible == '0') {
              i.is_view = false;
            }

            if (i.value == 'current_stock' && this.tableDetails.data.is_direct=='1') {
              // i.is_view = false;
            }

            if (i.value == 'average_daily_consumption' && this.company_setup.is_average_daily_consumption_po_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'average_daily_consumption' && this.company_setup.is_average_daily_consumption_po_visible == '0') {
              i.is_view = false;
            }

            if (i.value == 'average_daily_consumption' && this.tableDetails.data.is_direct=='1') {
              // i.is_view = false;
            }

            if (i.value == 'inventory_in_hand' && this.company_setup.is_inventory_in_hand_po_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'inventory_in_hand' && this.company_setup.is_inventory_in_hand_po_visible == '0') {
              i.is_view = false;
            }
 if (i.value == 'inventory_in_hand' && this.tableDetails.data.is_direct=='1') {
              // i.is_view = false;
            }
            if (i.value == 'inventory_in_hand') {
              i.display = this.company_setup.pr_inventory_in_hand_name;
            }
            if (i.value == 'procured_days') {
              i.display = this.company_setup.pr_procured_days_name;
            }
            if (i.value == 'lead_time' && this.company_setup.is_lead_time_po_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'lead_time' && this.company_setup.is_lead_time_po_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'lead_time' && this.tableDetails.data.is_direct=='1') {
              // i.is_view = false;
            }

            if (i.value == 'procured_days' && this.company_setup.is_procured_days_po_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'procured_days' && this.company_setup.is_procured_days_po_visible == '0') {
              i.is_view = false;
            }

            if (i.value == 'procured_days' && this.tableDetails.data.is_direct=='1') {
              // i.is_view = false;
            }
            if (i.value == 'discount_unit_price' && this.company_setup.is_discount_applicable_in_po == '1') {
              i.is_view = true;
              if (is_not_discount) {
                if (i.value == 'discount_unit_price') {
                  i.is_view = false;
                }
              }
            }
            if (i.value == 'discount_unit_price' && this.company_setup.is_discount_applicable_in_po == '0') {
              i.is_view = false;
            }
            if (i.value == 'discounted_unit_price' && this.company_setup.is_discount_applicable_in_po == '1') {
              i.is_view = true;
              if (is_not_discount) {
                if (i.value == 'discounted_unit_price') {
                  i.is_view = false;
                }
              }
            }
            if (i.value == 'discounted_unit_price' && this.company_setup.is_discount_applicable_in_po == '0') {
              i.is_view = false;
            }

            if (i.value == 'discount_amount' && this.company_setup.is_discount_applicable_in_po == '1') {
              i.is_view = true;
              if (is_not_discount) {
                if (i.value == 'discount_amount') {
                  i.is_view = false;
                }
              }
            }
            if (i.value == 'discount_amount' && this.company_setup.is_discount_applicable_in_po == '0') {
              i.is_view = false;
            }

            if (i.value == 'discounted_amount' && this.company_setup.is_discount_applicable_in_po == '1') {
              i.is_view = true;
              if (is_not_discount) {
                if (i.value == 'discounted_amount') {
                  i.is_view = false;
                }
              }
            }
            if (i.value == 'discounted_amount' && this.company_setup.is_discount_applicable_in_po == '0') {
              i.is_view = false;
            }

            if (i.value == 'discount_percentage' && this.company_setup.is_discount_applicable_in_po == '1') {
              i.is_view = true;
              if (is_not_discount) {
                if (i.value == 'discount_percentage') {
                  i.is_view = false;
                }
              }
            }
            if (i.value == 'discount_percentage' && this.company_setup.is_discount_applicable_in_po == '0') {
              i.is_view = false;
            }



            if (i.value == 'product_catalog_id' && this.company_setup.is_catalog_id_visible && this.company_setup.product_catalog_id == '1') {
              i.is_view = true;
            }
            if (i.value == 'product_catalog_id' && (!this.company_setup.is_catalog_id_visible || this.company_setup.product_catalog_id == '0')) {
              i.is_view = false;
            }

            if (i.value == 'conversion_unit_price' && this.tableDetails.data.is_different_document_currency == '1') {
              i.is_view = true;
              i.display = "Unit price (" + this.tableDetails.data.currency_code + ")"
            }
            if (i.value == 'conversion_unit_price' && this.tableDetails.data.is_different_document_currency == '0') {
              i.is_view = false;
              i.display = "Unit price";

            }

            if (i.value == 'is_logistic' && !is_logistic) {
              i.is_view = false;
            }

            if ((i.value == 'service_start_date' || i.value == 'service_end_date' || i.value == 'total_duration') && is_goods) {
              i.is_view = false;
            }

            if ((i.value == 'service_start_date' || i.value == 'service_end_date' || i.value == 'total_duration') && is_not_service) {
              i.is_view = false;
            }

            if ((i.value == 'service_start_date' || i.value == 'service_end_date' || i.value == 'total_duration') && is_all_service) {
              i.is_view = true;
            }
          }
        }
        this.makeData();

        break;
      case 'mpreport':
        this.commonVariableList.columnList = globalVariables.mpVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.mp_items ? this.tableDetails.data.mp_items : [];

        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '1') {
              i.is_view = true;
            }
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '0') {
              i.is_view = false;
            }
            if (i.value == 'average_daily_consumption' && this.company_setup.is_average_daily_consumption_visible == '1') {
              i.is_view = true;
            }

            if (i.value == 'moq' && this.company_setup.is_moq_visible == '1') {
              i.is_view = true;
            }

          }
        }
        this.makeData();

        break;
      case 'sireport':
        this.commonVariableList.columnList = globalVariables.siVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.si_items ? this.tableDetails.data.si_items : [];
        let project_detail = '';
        let customer_detail = '';



        if (this.commonVariableList.items) {
          for (let i of this.commonVariableList.items) {
            let d: any = {};
            d = i ? i : {};

            if (d.project_name != '' && d.project_name != undefined) {
              project_detail = d.project_name + " (" + d.project_code + ")";
            }
            if (d.customer_first_name != '' && d.customer_first_name != undefined) {
              customer_detail = d.customer_first_name + " " + d.customer_last_name + " (" + d.customer_code + ")";
            }

            i.customer_detail = customer_detail ? customer_detail : '';
            i.project_detail = project_detail ? project_detail : '';

          }
        }

        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '1') {
              i.is_view = true;
            }
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '0') {
              i.is_view = false;
            }

            if (i.value == 'project_detail' && project_detail != '' && project_detail != undefined) {
              i.is_view = true;
            }
            if (i.value == 'project_detail' && (project_detail == '' || project_detail == undefined)) {
              i.is_view = false;
            }

            if (i.value == 'customer_detail' && customer_detail != '' && customer_detail != undefined) {
              i.is_view = true;
            }
            if (i.value == 'customer_detail' && (customer_detail == '' || customer_detail == undefined)) {
              i.is_view = false;
            }
          }
        }


        this.makeData();

        break;
      case 'prreport':

        this.commonVariableList.columnList = globalVariables.prVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.pr_items ? this.tableDetails.data.pr_items : [];

        if (this.commonVariableList.items) {
          for (let d of this.commonVariableList.items) {
            d.product_qty = this.webService.convertNaN(d.product_qty) ? this.webService.convertNaN(d.product_qty) : '0';
            d.unit_price = this.webService.convertNaN(d.unit_price) ? this.webService.convertNaN(d.unit_price) : '0';

            d.lead_time = this.webService.convertNaN(d.lead_time) ? this.webService.convertNaN(d.lead_time) : '0';
            d.current_stock = this.webService.convertNaN(d.current_stock) ? this.webService.convertNaN(d.current_stock) : '0';
            d.average_daily_consumption = this.webService.convertNaN(d.average_daily_consumption) ? this.webService.convertNaN(d.average_daily_consumption) : '0';
            d.inventory_in_hand = this.webService.convertNaN(d.inventory_in_hand) ? this.webService.convertNaN(d.inventory_in_hand) : '0';
            d.procured_days = this.webService.convertNaN(d.procured_days) ? this.webService.convertNaN(d.procured_days) : '0';
            d.moq = this.webService.convertNaN(d.moq) ? this.webService.convertNaN(d.moq) : '0';
            d.item_qty = this.webService.convertNaN(d.item_qty) ? this.webService.convertNaN(d.item_qty) : '0';
           
            d.unit_price = parseFloat(d.unit_price) ? parseFloat(d.unit_price) : '0';
            d.product_qty = parseFloat(d.product_qty) ? parseFloat(d.product_qty) : '0';

            d.lead_time = parseFloat(d.lead_time) ? parseFloat(d.lead_time) : '0';
            d.current_stock = parseFloat(d.current_stock) ? parseFloat(d.current_stock) : '0';
            d.average_daily_consumption = parseFloat(d.average_daily_consumption) ? parseFloat(d.average_daily_consumption) : '0';
            d.inventory_in_hand = parseFloat(d.inventory_in_hand) ? parseFloat(d.inventory_in_hand) : '0';
            d.procured_days = parseFloat(d.procured_days) ? parseFloat(d.procured_days) : '0';
            d.moq = parseFloat(d.moq) ? parseFloat(d.moq) : '0';
            d.item_qty = parseFloat(d.item_qty) ? parseFloat(d.item_qty) : '0';
      
      
            d.unit_price = this.webService.convertNaN(d.unit_price) ? this.webService.convertNaN(d.unit_price) : '0';
            d.product_qty = this.webService.convertNaN(d.product_qty) ? this.webService.convertNaN(d.product_qty) : '0';

            d.lead_time = this.webService.convertNaN(d.lead_time) ? this.webService.convertNaN(d.lead_time) : '0';
            d.current_stock = this.webService.convertNaN(d.current_stock) ? this.webService.convertNaN(d.current_stock) : '0';
            d.average_daily_consumption = this.webService.convertNaN(d.average_daily_consumption) ? this.webService.convertNaN(d.average_daily_consumption) : '0';
            d.inventory_in_hand = this.webService.convertNaN(d.inventory_in_hand) ? this.webService.convertNaN(d.inventory_in_hand) : '0';
            d.procured_days = this.webService.convertNaN(d.procured_days) ? this.webService.convertNaN(d.procured_days) : '0';
            d.moq = this.webService.convertNaN(d.moq) ? this.webService.convertNaN(d.moq) : '0';
            d.item_qty = this.webService.convertNaN(d.item_qty) ? this.webService.convertNaN(d.item_qty) : '0';
  
          }
        }
        this.company_setup.is_catalog_id_visible = false;
        this.company_setup.pr_item_columnList = this.company_setup.pr_item_columnList ? this.company_setup.pr_item_columnList : []
        if (this.company_setup.pr_item_columnList.length > 0) {
          this.company_setup.is_catalog_id_visible = this.company_setup.pr_item_columnList.some((v) => { return v.id == 'catalog_id' && v.isVisible })
        }
        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {
            if (i.value == 'product_catalog_id' && this.company_setup.is_catalog_id_visible && this.company_setup.product_catalog_id == '1') {
              i.is_view = true;
            }
            if (i.value == 'product_catalog_id' && (!this.company_setup.is_catalog_id_visible || this.company_setup.product_catalog_id == '0')) {
              i.is_view = false;
            }
            if (i.value == 'average_daily_consumption') {
              i.display = this.company_setup.average_consumption_frequency_name;
            }
            if (i.value == 'unit_price' && this.company_setup.is_pr_unit_price_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'current_stock' && this.company_setup.is_current_stock_visible == '1') {
              i.is_view = true;
            }

            if (i.value == 'average_daily_consumption' && this.company_setup.is_average_daily_consumption_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'inventory_in_hand' && this.company_setup.is_inventory_in_hand_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'inventory_in_hand') {
              i.display = this.company_setup.pr_inventory_in_hand_name;
            }
            if (i.value == 'procured_days') {
              i.display = this.company_setup.pr_procured_days_name;
            }
            if (i.value == 'lead_time' && this.company_setup.is_lead_time_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'procured_days' && this.company_setup.is_procured_days_visible == '1') {
              i.is_view = true;
            }

            if (i.value == 'moq' && this.company_setup.is_moq_visible == '1') {
              i.is_view = true;
            }

          }
        }
        this.makeData();

        break;
   
    

      case 'mprreport':

        this.commonVariableList.columnList = globalVariables.mprVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.mpr_items ? this.tableDetails.data.mpr_items : [];
        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '1') {
              i.is_view = true;
            }
            if (i.value == 'product_catalog_id' && this.company_setup.product_catalog_id == '0') {
              i.is_view = false;
            }

            if (i.value == 'productcode' && this.company_setup.is_mpr_sku_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'productcode' && this.company_setup.is_mpr_sku_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'unit_type_name' && this.company_setup.is_mpr_unit_type_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'unit_type_name' && this.company_setup.is_mpr_unit_type_visible == '1') {
              i.is_view = true;
            }

            if (i.value == 'buffer_stock' && this.company_setup.is_mpr_buffer_stock_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'buffer_stock' && this.company_setup.is_mpr_buffer_stock_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'is_this_my_boq' && this.company_setup.is_mpr_my_boq_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'is_this_my_boq' && this.company_setup.is_mpr_my_boq_visible == '1') {
              i.is_view = true;
            }

          }
        }
        this.makeData();

        break;
      case 'stnreport':
        this.commonVariableList.columnList = globalVariables.stnVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.product_details ? this.tableDetails.data.product_details : [];
        this.makeData();

        break;
      case 'proformainvoicereport':
        this.commonVariableList.columnList = globalVariables.proformainvoiceVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.invoice_items ? this.tableDetails.data.invoice_items : [];
        this.makeData();
        break;

      case 'salesOrderData':
        this.commonVariableList.columnList = globalVariables.SalesOrderVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.invoice_items ? this.tableDetails.data.invoice_items : [];
        if (this.commonVariableList.columnList) {
          for (let x of this.commonVariableList.columnList) {
            // if(x.value == 'hsn_code' && this.company_setup.sales_description_visible=='1'){
            //   x.is_view=true;
            // }

            if (x.value == 'account_name' && this.company_setup.sales_account_name_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'account_name' && this.company_setup.sales_account_name_visible == '0') {
              x.is_view = false;
            }

            if (x.value == 'hsn_code' && this.company_setup.sales_hsn_code_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'hsn_code' && this.company_setup.sales_hsn_code_visible == '0') {
              x.is_view = false;
            }

            if (x.value == 'invoice_cgst' && this.company_setup.sales_cgst_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'invoice_cgst' && this.company_setup.sales_cgst_visible == '0') {
              x.is_view = false;
            }

            if (x.value == 'invoice_sgst' && this.company_setup.sales_sgst_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'invoice_sgst' && this.company_setup.sales_sgst_visible == '0') {
              x.is_view = false;
            }

            if (x.value == 'invoice_igst' && this.company_setup.sales_igst_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'invoice_igst' && this.company_setup.sales_igst_visible == '0') {
              x.is_view = false;
            }

            if (x.value == 'invoice_ugst' && this.company_setup.sales_ugst_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'invoice_ugst' && this.company_setup.sales_ugst_visible == '0') {
              x.is_view = false;
            }

            if (x.value == 'invoice_cess' && this.company_setup.sales_cess_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'invoice_cess' && this.company_setup.sales_cess_visible == '0') {
              x.is_view = false;
            }
            if (x.value == 'invoice_other_tax' && this.company_setup.sales_other_tax_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'invoice_other_tax' && this.company_setup.sales_other_tax_visible == '0') {
              x.is_view = false;
            }

            if (x.value == 'invoice_tax' && this.company_setup.sales_gst_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'invoice_tax' && this.company_setup.sales_gst_visible == '0') {
              x.is_view = false;
            }



          }
        }
        this.makeData();
        break;
      case 'salesinvoicereport':
        this.commonVariableList.columnList = globalVariables.salesinvoiceVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.invoice_items ? this.tableDetails.data.invoice_items : [];

        if (this.commonVariableList.columnList) {
          for (let x of this.commonVariableList.columnList) {
              if(x.value=='account_name' && this.company_setup.is_account_code_visible_in_sales_invoice=='1')
              {
                x.is_view = true;

              }
              if(x.value=='account_name'&& this.company_setup.is_account_code_visible_in_sales_invoice=='0')
              {
                x.is_view = false;

              }

              if(x.value=='inventory_unit_price' && this.company_setup.is_sales_invoice_price_visible=='1')
              {
                x.is_view = true;

              }
              if(x.value=='inventory_unit_price'&& this.company_setup.is_sales_invoice_price_visible=='0')
              {
                x.is_view = false;

              }

              
            if (x.value == 'conversion_unit_price' && this.tableDetails.data.is_different_document_currency == '0') {
              x.display = "FC Unit Price"
              x.is_view = false;
            }
            if (x.value == 'conversion_unit_price' && this.tableDetails.data.is_different_document_currency == '1') {
              x.display = "FC Unit Price" + "(" + this.tableDetails.data.currency_code + ")";
              x.is_view = true;
            }


            if (x.value == 'available_stock' && this.company_setup.in_sales_invoice_is_available_stock_visible == '1') {
              x.is_view = true;
            }

            if (x.value == 'available_stock' && this.company_setup.in_sales_invoice_is_available_stock_visible == '0') {
              x.is_view = false;
            }





          }
        }
        this.makeData();

        break;
      case 'invoicepaymentreport':
        this.commonVariableList.columnList = globalVariables.invoicePaymentVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.payment_details ? this.tableDetails.data.payment_details : [];
        this.company_setup.is_invoice_Payments_retention_amount = this.company_setup.is_invoice_Payments_retention_amount ? this.company_setup.is_invoice_Payments_retention_amount : '0';
        this.company_setup.is_invoice_Payments_volume_discount = this.company_setup.is_invoice_Payments_volume_discount ? this.company_setup.is_invoice_Payments_volume_discount : '0';
        this.company_setup.is_invoice_Payments_cash_discount = this.company_setup.is_invoice_Payments_cash_discount ? this.company_setup.is_invoice_Payments_cash_discount : '0';
        this.company_setup.is_invoice_Payments_current_payable = this.company_setup.is_invoice_Payments_current_payable ? this.company_setup.is_invoice_Payments_current_payable : '0';

        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {
            if (i.value == 'total_balance_amount' && this.company_setup.is_invoice_Payments_retention_amount == '1') {
              i.is_view = true;
            }
            if (i.value == 'total_balance_amount' && this.company_setup.is_invoice_Payments_retention_amount == '0') {
              i.is_view = false;
            }

            if (i.value == 'cash_discount_amount' && this.company_setup.is_invoice_Payments_cash_discount == '1') {
              i.is_view = true;
            }
            if (i.value == 'cash_discount_amount' && this.company_setup.is_invoice_Payments_cash_discount == '0') {
              i.is_view = false;
            }

            if (i.value == 'volume_discount_amount' && this.company_setup.is_invoice_Payments_volume_discount == '1') {
              i.is_view = true;
            }
            if (i.value == 'volume_discount_amount' && this.company_setup.is_invoice_Payments_volume_discount == '0') {
              i.is_view = false;
            }

            if (i.value == 'gst_deduction_amount' && this.company_setup.is_invoice_Payments_gst_deduction_visible == '1') {
              i.is_view = true;
            }
            if (i.value == 'gst_deduction_amount' && this.company_setup.is_invoice_Payments_gst_deduction_visible == '0') {
              i.is_view = false;
            }
            if (i.value == 'gst_deduction_amount') {
              i.display = this.company_setup.in_invoice_custom_gst_deduction_amount_name;
            }

            if (i.value == 'current_payable_amount' && this.company_setup.is_invoice_Payments_current_payable == '1') {
              i.is_view = true;
            }
            if (i.value == 'current_payable_amount' && this.company_setup.is_invoice_Payments_current_payable == '0') {
              i.is_view = false;
            }
          }
        }
        this.makeData();

        break;
      case 'invoicepartpaymentreport':
        this.commonVariableList.columnList = globalVariables.invoicePartPaymentVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.payment_details ? this.tableDetails.data.payment_details : [];
        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {
            if (i.value == 'total_balance_amount' && this.company_setup.is_invoice_Payments_retention_amount == '1') {
              i.is_view = true;
            }
            if (i.value == 'total_balance_amount' && this.company_setup.is_invoice_Payments_retention_amount == '0') {
              i.is_view = false;
            }

            if (i.value == 'cash_discount_amount' && this.company_setup.is_invoice_Payments_cash_discount == '1') {
              i.is_view = true;
            }
            if (i.value == 'cash_discount_amount' && this.company_setup.is_invoice_Payments_cash_discount == '0') {
              i.is_view = false;
            }

            if (i.value == 'volume_discount_amount' && this.company_setup.is_invoice_Payments_volume_discount == '1') {
              i.is_view = true;
            }
            if (i.value == 'volume_discount_amount' && this.company_setup.is_invoice_Payments_volume_discount == '0') {
              i.is_view = false;
            }

            if (i.value == 'current_payable_amount' && this.company_setup.is_invoice_Payments_current_payable == '1') {
              i.is_view = true;
            }
            if (i.value == 'current_payable_amount' && this.company_setup.is_invoice_Payments_current_payable == '0') {
              i.is_view = false;
            }
          }
        }
        this.makeData();

        break;
      case 'invoiceretentionpaymentreport':
        this.commonVariableList.columnList = globalVariables.invoiceRetentionPaymentVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.payment_details ? this.tableDetails.data.payment_details : [];
        if (this.commonVariableList.columnList) {
          for (let i of this.commonVariableList.columnList) {
            if (i.value == 'total_balance_amount' && this.company_setup.is_invoice_Payments_retention_amount == '1') {
              i.is_view = true;
            }
            if (i.value == 'total_balance_amount' && this.company_setup.is_invoice_Payments_retention_amount == '0') {
              i.is_view = false;
            }

            if (i.value == 'cash_discount_amount' && this.company_setup.is_invoice_Payments_cash_discount == '1') {
              i.is_view = true;
            }
            if (i.value == 'cash_discount_amount' && this.company_setup.is_invoice_Payments_cash_discount == '0') {
              i.is_view = false;
            }

            if (i.value == 'volume_discount_amount' && this.company_setup.is_invoice_Payments_volume_discount == '1') {
              i.is_view = true;
            }
            if (i.value == 'volume_discount_amount' && this.company_setup.is_invoice_Payments_volume_discount == '0') {
              i.is_view = false;
            }

            if (i.value == 'current_payable_amount' && this.company_setup.is_invoice_Payments_current_payable == '1') {
              i.is_view = true;
            }
            if (i.value == 'current_payable_amount' && this.company_setup.is_invoice_Payments_current_payable == '0') {
              i.is_view = false;
            }
          }
        }
        this.makeData();

        break;
      case 'popaymentreport':
        this.commonVariableList.columnList = globalVariables.poPaymentVariableList.columnList;
        this.commonVariableList.items = this.tableDetails.data.payment_details ? this.tableDetails.data.payment_details : [];
        this.makeData();
    
      default:
        this.toaster.error("Error", "Wrong Data For item table");
    }
  }

  colspan: any = '0';
  makeData() {
    if (this.commonVariableList.items) {
      let sl_no: number = 1;
      for (let i of this.commonVariableList.items) {
        i.sl_no = sl_no;
        i.is_highlighted_row=i.is_highlighted_row?i.is_highlighted_row:false;

        sl_no++;
      }
    }

    if (this.commonVariableList.columnList) {
      let sl_no: number = 1;
      for (let i of this.commonVariableList.columnList) {
        // i.sl_no=sl_no;

        i.tr_class = "";
        i.td_class = "";
        if (i.value == 'sl_no') {
          i.tr_class = i.tr_class + "action_tdfirst_sticky fixed_th testing_th_" + i.value
          i.td_class = i.td_class + "action_tdfirst_sticky testing_td_" + i.value
        }
        else if (i.value == 'product_name') {
          i.tr_class = i.tr_class + "action_tdsecond_sticky fixed_th testing_th_" + i.value
          i.td_class = i.td_class + "action_tdsecond_sticky testing_td_" + i.value
        }
        else {
          i.tr_class = "testing_th_" + i.value
          i.td_class = "testing_td_" + i.value
        }

        i.tr_class = i.tr_class + " testing_th_index_" + sl_no;
        i.td_class = i.td_class + " testing_td_index_" + sl_no+' span_ansr';
        sl_no++;
      }
    }
    this.isProgressing = false;
    // this.colspan='0'
    // this.colspan=Object.keys(this.commonVariableList.columnList[0]).length?Object.keys(this.commonVariableList.columnList[0]).length:'0'
  }

  eventAction(data,data2)
  {
    let payload:any={};
    let url:any='';   
    switch(data.value)
    {
      case 'qrcode_file_url':
          payload.product_id=[data2.product_id];   
          payload.grn_id=data2.grn_id?data2.grn_id:data2.id;
          payload.start='';
          payload.limit='';
          url=data.event.url;
      break;
      case 'barcode_file_url':
          payload.product_id=[data2.product_id];   
          payload.grn_id=data2.grn_id?data2.grn_id:data2.id;
          payload.start='';
          payload.limit='';
          url=data.event.url;
          break;
      default :
        payload={};
        url='';
    }
    this.downLoadFile(url,payload)

  }
  downLoadFile(url,payload) {
   if(url==undefined||url=='')
   {
     return;
   }

    this.webService.commonPostMethod(url, payload).subscribe(
      data => {
        if (data.status) {
          // window.location.href = data.file_path;
          window.open(data.file_path,'_blank')
        } else {
          this.toaster.error("error", "Error", data.message);
        }
      },
      error => {
        this.toaster.error("Error", "Something went wrong")
      })
  }
}
