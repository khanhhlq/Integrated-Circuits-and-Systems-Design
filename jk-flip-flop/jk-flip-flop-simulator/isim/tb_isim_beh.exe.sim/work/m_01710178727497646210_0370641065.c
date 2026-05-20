/**********************************************************************/
/*   ____  ____                                                       */
/*  /   /\/   /                                                       */
/* /___/  \  /                                                        */
/* \   \   \/                                                       */
/*  \   \        Copyright (c) 2003-2009 Xilinx, Inc.                */
/*  /   /          All Right Reserved.                                 */
/* /---/   /\                                                         */
/* \   \  /  \                                                      */
/*  \___\/\___\                                                    */
/***********************************************************************/

/* This file is designed for use with ISim build 0xfbc00daa */

#define XSI_HIDE_SYMBOL_SPEC true
#include "xsi.h"
#include <memory.h>
#ifdef __GNUC__
#include <stdlib.h>
#else
#include <malloc.h>
#define alloca _alloca
#endif
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/jk-flip-flop/design.v";
static unsigned int ng1[] = {1U, 0U};
static unsigned int ng2[] = {0U, 0U};
static unsigned int ng3[] = {2U, 0U};
static unsigned int ng4[] = {3U, 0U};



static void Always_14_0(char *t0)
{
    char t4[8];
    char t21[8];
    char t22[8];
    char *t1;
    char *t2;
    char *t3;
    char *t5;
    char *t6;
    unsigned int t7;
    unsigned int t8;
    unsigned int t9;
    unsigned int t10;
    unsigned int t11;
    char *t12;
    char *t13;
    unsigned int t14;
    unsigned int t15;
    unsigned int t16;
    unsigned int t17;
    unsigned int t18;
    char *t19;
    char *t20;
    unsigned int t23;
    unsigned int t24;
    unsigned int t25;
    unsigned int t26;
    unsigned int t27;
    unsigned int t28;
    unsigned int t29;
    char *t30;
    int t31;

LAB0:    t1 = (t0 + 3160U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(14, ng0);
    t2 = (t0 + 3480);
    *((int *)t2) = 1;
    t3 = (t0 + 3192);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(14, ng0);

LAB5:    xsi_set_current_line(15, ng0);
    t5 = (t0 + 1528U);
    t6 = *((char **)t5);
    memset(t4, 0, 8);
    t5 = (t6 + 4);
    t7 = *((unsigned int *)t5);
    t8 = (~(t7));
    t9 = *((unsigned int *)t6);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB9;

LAB7:    if (*((unsigned int *)t5) == 0)
        goto LAB6;

LAB8:    t12 = (t4 + 4);
    *((unsigned int *)t4) = 1;
    *((unsigned int *)t12) = 1;

LAB9:    t13 = (t4 + 4);
    t14 = *((unsigned int *)t13);
    t15 = (~(t14));
    t16 = *((unsigned int *)t4);
    t17 = (t16 & t15);
    t18 = (t17 != 0);
    if (t18 > 0)
        goto LAB10;

LAB11:    xsi_set_current_line(21, ng0);
    t2 = (t0 + 1688U);
    t3 = *((char **)t2);
    memset(t4, 0, 8);
    t2 = (t3 + 4);
    t7 = *((unsigned int *)t2);
    t8 = (~(t7));
    t9 = *((unsigned int *)t3);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB34;

LAB32:    if (*((unsigned int *)t2) == 0)
        goto LAB31;

LAB33:    t5 = (t4 + 4);
    *((unsigned int *)t4) = 1;
    *((unsigned int *)t5) = 1;

LAB34:    t6 = (t4 + 4);
    t14 = *((unsigned int *)t6);
    t15 = (~(t14));
    t16 = *((unsigned int *)t4);
    t17 = (t16 & t15);
    t18 = (t17 != 0);
    if (t18 > 0)
        goto LAB35;

LAB36:    xsi_set_current_line(26, ng0);

LAB39:    xsi_set_current_line(29, ng0);
    t2 = (t0 + 1208U);
    t3 = *((char **)t2);
    t2 = (t0 + 1048U);
    t5 = *((char **)t2);
    xsi_vlogtype_concat(t4, 2, 2, 2U, t5, 1, t3, 1);

LAB40:    t2 = ((char*)((ng2)));
    t31 = xsi_vlog_unsigned_case_compare(t4, 2, t2, 2);
    if (t31 == 1)
        goto LAB41;

LAB42:    t2 = ((char*)((ng1)));
    t31 = xsi_vlog_unsigned_case_compare(t4, 2, t2, 2);
    if (t31 == 1)
        goto LAB43;

LAB44:    t2 = ((char*)((ng3)));
    t31 = xsi_vlog_unsigned_case_compare(t4, 2, t2, 2);
    if (t31 == 1)
        goto LAB45;

LAB46:    t2 = ((char*)((ng4)));
    t31 = xsi_vlog_unsigned_case_compare(t4, 2, t2, 2);
    if (t31 == 1)
        goto LAB47;

LAB48:
LAB49:
LAB37:
LAB12:    goto LAB2;

LAB6:    *((unsigned int *)t4) = 1;
    goto LAB9;

LAB10:    xsi_set_current_line(15, ng0);

LAB13:    xsi_set_current_line(17, ng0);
    t19 = ((char*)((ng1)));
    t20 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t20, t19, 0, 0, 1, 0LL);
    xsi_set_current_line(19, ng0);
    t2 = (t0 + 1688U);
    t3 = *((char **)t2);
    memset(t22, 0, 8);
    t2 = (t3 + 4);
    t7 = *((unsigned int *)t2);
    t8 = (~(t7));
    t9 = *((unsigned int *)t3);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB17;

LAB15:    if (*((unsigned int *)t2) == 0)
        goto LAB14;

LAB16:    t5 = (t22 + 4);
    *((unsigned int *)t22) = 1;
    *((unsigned int *)t5) = 1;

LAB17:    memset(t21, 0, 8);
    t6 = (t22 + 4);
    t14 = *((unsigned int *)t6);
    t15 = (~(t14));
    t16 = *((unsigned int *)t22);
    t17 = (t16 & t15);
    t18 = (t17 & 1U);
    if (t18 != 0)
        goto LAB18;

LAB19:    if (*((unsigned int *)t6) != 0)
        goto LAB20;

LAB21:    t13 = (t21 + 4);
    t23 = *((unsigned int *)t21);
    t24 = *((unsigned int *)t13);
    t25 = (t23 || t24);
    if (t25 > 0)
        goto LAB22;

LAB23:    t26 = *((unsigned int *)t21);
    t27 = (~(t26));
    t28 = *((unsigned int *)t13);
    t29 = (t27 || t28);
    if (t29 > 0)
        goto LAB24;

LAB25:    if (*((unsigned int *)t13) > 0)
        goto LAB26;

LAB27:    if (*((unsigned int *)t21) > 0)
        goto LAB28;

LAB29:    memcpy(t4, t20, 8);

LAB30:    t30 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t30, t4, 0, 0, 1, 0LL);
    goto LAB12;

LAB14:    *((unsigned int *)t22) = 1;
    goto LAB17;

LAB18:    *((unsigned int *)t21) = 1;
    goto LAB21;

LAB20:    t12 = (t21 + 4);
    *((unsigned int *)t21) = 1;
    *((unsigned int *)t12) = 1;
    goto LAB21;

LAB22:    t19 = ((char*)((ng1)));
    goto LAB23;

LAB24:    t20 = ((char*)((ng2)));
    goto LAB25;

LAB26:    xsi_vlog_unsigned_bit_combine(t4, 1, t19, 1, t20, 1);
    goto LAB30;

LAB28:    memcpy(t4, t19, 8);
    goto LAB30;

LAB31:    *((unsigned int *)t4) = 1;
    goto LAB34;

LAB35:    xsi_set_current_line(21, ng0);

LAB38:    xsi_set_current_line(23, ng0);
    t12 = ((char*)((ng2)));
    t13 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t13, t12, 0, 0, 1, 0LL);
    xsi_set_current_line(24, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB37;

LAB41:    xsi_set_current_line(30, ng0);

LAB50:    xsi_set_current_line(32, ng0);
    t6 = (t0 + 2088);
    t12 = (t6 + 56U);
    t13 = *((char **)t12);
    t19 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t19, t13, 0, 0, 1, 0LL);
    xsi_set_current_line(33, ng0);
    t2 = (t0 + 2248);
    t3 = (t2 + 56U);
    t5 = *((char **)t3);
    t6 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t6, t5, 0, 0, 1, 0LL);
    goto LAB49;

LAB43:    xsi_set_current_line(35, ng0);

LAB51:    xsi_set_current_line(37, ng0);
    t3 = ((char*)((ng2)));
    t5 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t5, t3, 0, 0, 1, 0LL);
    xsi_set_current_line(38, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB49;

LAB45:    xsi_set_current_line(40, ng0);

LAB52:    xsi_set_current_line(42, ng0);
    t3 = ((char*)((ng1)));
    t5 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t5, t3, 0, 0, 1, 0LL);
    xsi_set_current_line(43, ng0);
    t2 = ((char*)((ng2)));
    t3 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB49;

LAB47:    xsi_set_current_line(45, ng0);

LAB53:    xsi_set_current_line(47, ng0);
    t3 = (t0 + 2088);
    t5 = (t3 + 56U);
    t6 = *((char **)t5);
    memset(t21, 0, 8);
    t12 = (t6 + 4);
    t7 = *((unsigned int *)t12);
    t8 = (~(t7));
    t9 = *((unsigned int *)t6);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB57;

LAB55:    if (*((unsigned int *)t12) == 0)
        goto LAB54;

LAB56:    t13 = (t21 + 4);
    *((unsigned int *)t21) = 1;
    *((unsigned int *)t13) = 1;

LAB57:    t19 = (t21 + 4);
    t20 = (t6 + 4);
    t14 = *((unsigned int *)t6);
    t15 = (~(t14));
    *((unsigned int *)t21) = t15;
    *((unsigned int *)t19) = 0;
    if (*((unsigned int *)t20) != 0)
        goto LAB59;

LAB58:    t24 = *((unsigned int *)t21);
    *((unsigned int *)t21) = (t24 & 1U);
    t25 = *((unsigned int *)t19);
    *((unsigned int *)t19) = (t25 & 1U);
    t30 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t30, t21, 0, 0, 1, 0LL);
    xsi_set_current_line(48, ng0);
    t2 = (t0 + 2248);
    t3 = (t2 + 56U);
    t5 = *((char **)t3);
    memset(t21, 0, 8);
    t6 = (t5 + 4);
    t7 = *((unsigned int *)t6);
    t8 = (~(t7));
    t9 = *((unsigned int *)t5);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB63;

LAB61:    if (*((unsigned int *)t6) == 0)
        goto LAB60;

LAB62:    t12 = (t21 + 4);
    *((unsigned int *)t21) = 1;
    *((unsigned int *)t12) = 1;

LAB63:    t13 = (t21 + 4);
    t19 = (t5 + 4);
    t14 = *((unsigned int *)t5);
    t15 = (~(t14));
    *((unsigned int *)t21) = t15;
    *((unsigned int *)t13) = 0;
    if (*((unsigned int *)t19) != 0)
        goto LAB65;

LAB64:    t24 = *((unsigned int *)t21);
    *((unsigned int *)t21) = (t24 & 1U);
    t25 = *((unsigned int *)t13);
    *((unsigned int *)t13) = (t25 & 1U);
    t20 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t20, t21, 0, 0, 1, 0LL);
    goto LAB49;

LAB54:    *((unsigned int *)t21) = 1;
    goto LAB57;

LAB59:    t16 = *((unsigned int *)t21);
    t17 = *((unsigned int *)t20);
    *((unsigned int *)t21) = (t16 | t17);
    t18 = *((unsigned int *)t19);
    t23 = *((unsigned int *)t20);
    *((unsigned int *)t19) = (t18 | t23);
    goto LAB58;

LAB60:    *((unsigned int *)t21) = 1;
    goto LAB63;

LAB65:    t16 = *((unsigned int *)t21);
    t17 = *((unsigned int *)t19);
    *((unsigned int *)t21) = (t16 | t17);
    t18 = *((unsigned int *)t13);
    t23 = *((unsigned int *)t19);
    *((unsigned int *)t13) = (t18 | t23);
    goto LAB64;

}


extern void work_m_01710178727497646210_0370641065_init()
{
	static char *pe[] = {(void *)Always_14_0};
	xsi_register_didat("work_m_01710178727497646210_0370641065", "isim/tb_isim_beh.exe.sim/work/m_01710178727497646210_0370641065.didat");
	xsi_register_executes(pe);
}
